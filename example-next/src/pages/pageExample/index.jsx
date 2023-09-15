import React from 'react';
import parse from 'html-react-parser';
import { Converter } from '../../../components/customBlocks/converter/converter';
import { Request } from '../../../components/customBlocks/request/request';
import appConfig from "../../../config/app.config";

const PageExample = ({ dataFromCms }) => {

	console.log(dataFromCms)
	const options = {
		replace: ({ attribs, children }) => {
			if (!attribs) {
				return;
			}
			if (attribs['data-custom'] === 'Converter') {
				return <Converter data={children} attribs={attribs} />;
			}
			if (attribs['data-custom'] === 'request') {
				return <Request data={children} attribs={attribs} />;
			}
		},
	};

	const jsx = parse(dataFromCms, options);

	return (
		<div className="container">
			<h1>test</h1>
			<div dangerouslySetInnerHTML={{ __html: dataFromCms }} />
			{jsx}
		</div>
	);
};

export async function getServerSideProps({ query }) {
	const { id } = query;

	try {
		const response = await fetch(`${appConfig.baseUrl}load?page=${id}`);
		const data = await response.text();
		console.log(response)
		return {
			props: {
				dataFromCms: data,
			},
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			props: {
				dataFromCms: '', // Handle the error gracefully
			},
		};
	}
}

export default PageExample;
