import React from 'react';
import parse from 'html-react-parser';
import { Converter } from 'components/customBlocks/converter/converter';
import { Request } from 'components/customBlocks/request/request';
import appConfig from 'config/app.config';
import Image from "next/image";
import styles from './card.module.scss'
import {UserInfo} from "components/customBlocks/userInfo/userInfo";
import {InviteFriend} from "components/customBlocks/inviteFriendCard/inviteFriendCard";
import {BunkCards} from "components/customBlocks/bunkCards/bunkCards";
import {WatchList} from "components/customBlocks/watchList/watchList";

const formatStyles = (styles) => {
	if (!styles) return

	const stylesArr = styles.split(';')
	const styleObject = {}

	stylesArr.forEach(style => {
		const [propertyName, propertyValue] = style.split(':')
		if (propertyName && propertyValue) styleObject[propertyName.trim()] = propertyValue.trim()
	})

	return styleObject
}

const PageExample = ({ dataFromCms }) => {

	const options = {
		replace: ({ attribs, children, name }) => {
			if (!attribs) return

			switch (attribs['data-custom']) {
				case 'converter' : return <Converter />
				case 'request' : return <Request />
				case 'userInfo' : return <UserInfo />
				case 'inviteFriend' : return <InviteFriend />
				case 'bunkCards' : return <BunkCards />
				case 'watchList' : return <WatchList />
			}

			switch (name) {
				case 'img' : {
					const imgStyles = formatStyles(attribs.style);
					const width = +imgStyles?.width.match(/\d+/)
					const height = +imgStyles?.height.match(/\d+/)
					const path = attribs.src.split('/')[0]

					return <Image width={width ?? 100} height={height ?? 100} src={`${path === 'assets' ? appConfig.imgUrl : ''}${attribs.src}`} alt=''/>
				}
			}
		}
	}

	const jsx = parse(dataFromCms, options);


	return (
		<div className="container">
			<h1>test</h1>

			<div className={styles.card}>
				{jsx}
			</div>
		</div>
	);
};

export async function getServerSideProps({ query }) {
	const { slug } = query;

	try {
		const response = await fetch(`${appConfig.baseUrl}load?page=${slug}`)
		const data = await response.json()
		const html = data.html


		return {
			props: {
				dataFromCms: html,
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
