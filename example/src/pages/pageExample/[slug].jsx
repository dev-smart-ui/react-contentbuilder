import React from 'react';
import parse from 'html-react-parser';
import { Converter } from 'components/customBlocks/converter/converter';
import { Request } from 'components/customBlocks/request/request';
import appConfig from 'config/app.config';
import Image from "next/image";
import styles from './card.module.scss'

const PageExample = ({ dataFromCms }) => {

	const options = {
		replace: ({ attribs, children, name }) => {
			if (!attribs) {
				return;
			}
			if (attribs['data-custom'] === 'Converter') {
				return <Converter data={children} attribs={attribs} />;
			}
			if (attribs['data-custom'] === 'request') {
				return <Request data={children} attribs={attribs} />;
			}
			if (name === 'img') {
				const path = attribs.src.split('/')[0]
				return <Image width={100} height={100} src={`${path === 'assets' ? appConfig.imgUrl : ''}${attribs.src}`} alt=''/>;
			}
		},
	};

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
