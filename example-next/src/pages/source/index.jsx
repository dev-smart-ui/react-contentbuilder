// pages/source-code/[id].js

import React from 'react';
import styles from './sourceCode.module.css';

const Source = ({ dataFromCms }) => {
	return (
		<div className="container">
			<h1>source code</h1>
			<pre className={styles.code}>
        <code>{dataFromCms || ''}</code>
      </pre>
		</div>
	);
};

// Этот серверный компонент получает данные с сервера
export async function getServerSideProps({ query }) {
	const { id } = query;

	try {
		const response = await fetch(`https://builder.smart-ui.pro/source-code?page=${id}`);
		const data = await response.json(); // Предположим, что данные возвращаются в формате JSON

		return {
			props: {
				dataFromCms: data?.jsx || null, // Используйте null, если данные отсутствуют
			},
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			props: {
				dataFromCms: null, // Обработайте ошибку и используйте null
			},
		};
	}
}

export default Source;
