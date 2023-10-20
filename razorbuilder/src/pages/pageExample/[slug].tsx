import React  from 'react';
import parse from 'html-react-parser';
import {Converter} from '@components/customBlocks/converter/converter';
import {Request} from '@components/customBlocks/request/request';
import Image from "next/image";
import {UserInfo} from "@components/customBlocks/userInfo/userInfo";
import {InviteFriend} from "@components/customBlocks/inviteFriendCard/inviteFriendCard";
import {BunkCards} from "@components/customBlocks/bunkCards/bunkCards";
import {WatchList} from "@components/customBlocks/watchList/watchList";
import {appConfig} from "../../../config";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "@components/layout/layout";

const formatStyles = (styles: string | undefined): { [key: string]: string } => {
	if (!styles) return {};
	console.log('styles ', styles);

	const stylesArr = styles.split(';');
	const styleObject: { [key: string]: string } = {};

	stylesArr.forEach((style: string) => {
		const [propertyName, propertyValue] = style.split(':');
		if (propertyName && propertyValue) styleObject[propertyName.trim()] = propertyValue.trim();
	});

	return styleObject;
};


const PageExample = ({dataFromCms}: any) => {

	const options = {
		replace: ({ attribs, children, name }: any) => {
			if (!attribs) return

			switch (attribs['data-custom']) {
				case 'converter' : return <Converter data={children}/>
				case 'request' : return <Request data={children}/>
				case 'userInfo' : return <UserInfo data={children}/>
				case 'inviteFriend' : return <InviteFriend data={children}/>
				case 'bunkCards' : return <BunkCards data={children}/>
				case 'watchList' :   return <WatchList data={children} />
			}

			switch (name) {
				case 'img': {
					const imgStyles = attribs.style ? formatStyles(attribs.style) : '';
					const width = imgStyles ? +parseInt(imgStyles.width) : 100;
					const height = imgStyles ? +parseInt(imgStyles.height) : 100;
					const path = attribs.src.split('/')[0];

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

PageExample.Layout = Layout;



export async function getServerSideProps({ query, locale }) {
	const { slug } = query;

	try {
		const response = await fetch(`${appConfig.baseUrl}load?page=${slug}`)
		const data = await response.json()
		const html = data.html


		return {
			props: {
				dataFromCms: html,
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
