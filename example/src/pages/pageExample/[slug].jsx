import React, {useEffect, useState} from 'react';
import parse from 'html-react-parser';
import {Converter} from 'components/customBlocks/converter/converter';
import {Request} from 'components/customBlocks/request/request';
import appConfig from 'config/app.config';
import Image from "next/image";
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

function generateRandomNumber(min, max, decimalPlaces = 2) {
	const randomNumber = Math.random() * (max - min) + min;
	return parseFloat(randomNumber.toFixed(decimalPlaces));
}

const PageExample = ({dataFromCms}) => {

	const [randomDataWatchList, setRandomDataWatchList] = useState({
		amountCardOne: 0,
		amountCardTwo: 0,
		percentageOne: 0,
		percentageTwo: 0,
		percentageTree: 0,
		percentageFour: 0
	});

	const intervalGetData = () => {
		setInterval(() => {
			setRandomDataWatchList({
				amountCardOne: generateRandomNumber(14000, 15000),
				amountCardTwo: generateRandomNumber(14000, 15000),
				percentageOne: generateRandomNumber(0, 5),
				percentageTwo: generateRandomNumber(0, 5),
				percentageTree: generateRandomNumber(0, 5),
				percentageFour: generateRandomNumber(0, 5)
			})
		}, 2000)
	}

	useEffect(() => {
		intervalGetData()

		return () => {
			clearInterval(intervalGetData)
		};
	}, []);

	const options = {
		replace: ({attribs, children, name}) => {
			if (!attribs) return

			switch (attribs['data-custom']) {
				case 'converter' :
					return <Converter/>
				case 'request' :
					return <Request/>
				case 'userInfo' :
					return <UserInfo/>
				case 'inviteFriend' :
					return <InviteFriend/>
				case 'bunkCards' :
					return <BunkCards/>
				case 'watchList' :
					return <WatchList randomData={randomDataWatchList}/>
			}

			switch (name) {
				case 'img' : {
					const imgStyles = attribs.style ? formatStyles(attribs.style) : ''
					const width = imgStyles ? +imgStyles?.width.match(/\d+/) : 100
					const height = imgStyles ? +imgStyles?.height.match(/\d+/) : 100
					const path = attribs.src.split('/')[0]

					return <Image width={width} height={height} src={`${path === 'assets' ? appConfig.imgUrl : ''}${attribs.src}`} alt=''/>
				}
			}
		}
	}

	const jsx = parse(dataFromCms, options);


	return (
		<>{jsx}</>
	)
}

export async function getServerSideProps({query}) {
	const {slug} = query;

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
