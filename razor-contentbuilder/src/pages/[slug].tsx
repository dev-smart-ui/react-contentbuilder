import React, {useEffect, useState} from 'react'
import parse from 'html-react-parser'

import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import Layout from "@components/layout/layout";
import {BuilderImage} from "src/builderComponents/builderImage"
import {List_Of_Components} from "@components/list"
import {CONFIG_RAZOR} from "@components/config"
import {isLocalhost} from "../../services/helpers"


const formatStyles = (styles: string | undefined): { [key: string]: string } => {
	if (!styles) return {};


	const stylesArr = styles.split(';')
	const styleObject: { [key: string]: string } = {}

	stylesArr.forEach((style: string) => {
		const [propertyName, propertyValue] = style.split(':')
		if (propertyName && propertyValue) styleObject[propertyName.trim()] = propertyValue.trim()
	})

	return styleObject
}


const PageExample = ({dataFromCms, builderProps}: any) => {
	const [hostName, setHostName] = useState(CONFIG_RAZOR.serverUrl)

	useEffect(() => {
		const hostName = window.location.host
		setHostName(hostName)

	}, [])

	const counter = {}
	const options = {
		replace: ({attribs, name}: any) => {
			if (!attribs) return

			for (const key in List_Of_Components) {
				const Component = List_Of_Components[key]

				if (attribs['data-component'] === key) {
					if (counter[key]) {
						counter[key] = counter[key] + 1
					} else {
						counter[key] = 1
					}
					let componentProps = {}
					const correctedCounter = counter[key] - 1
					console.log('builderProps', builderProps[key + "" + correctedCounter])
					if (builderProps[key + "" + correctedCounter]) {
						componentProps = builderProps[key + "" + correctedCounter]
					}

					return <Component   {...componentProps}/>
				}
			}
			switch (name) {
				case 'img': {
					const imgStyles = attribs.style ? formatStyles(attribs.style) : ''
					const width = imgStyles ? +parseInt(imgStyles.width) : 480
					const height = imgStyles ? +parseInt(imgStyles.height) : 600
					const path = attribs.src.split('/')[0]

					return <BuilderImage
						width={width} height={height}
						src={`${isLocalhost(hostName) ? CONFIG_RAZOR.serverUrl : CONFIG_RAZOR.serverUrlProd}${attribs.src}`}
						alt=''/>
				}
			}
		}
	}

	const jsx = parse(dataFromCms, options)


	return (
		<>{jsx}</>
	)
}

PageExample.Layout = Layout


export async function getServerSideProps({query, locale}) {
	const {slug} = query;

	try {
		const response = await fetch(`${CONFIG_RAZOR.serverUrlProd}load?page=${slug}`)
		const data = await response.json()
		const html = data.html
		let builderProps = {}
		if (data?.props) {
			try {
				builderProps = JSON.parse(data?.props)
			} catch (e) {
				console.log(e)
			}
		}


		return {
			props: {
				dataFromCms: html, builderProps,
				...(await serverSideTranslations(locale!, [
					'common',
					'forms',
					'menu',
					'footer',
				])),
			},
		};
	} catch (error) {
		console.error('Error fetching data:', error)
		return {
			props: {
				dataFromCms: '',
			},
		};
	}
}

export default PageExample
