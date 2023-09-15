import React from 'react';
import { TableCell } from '../../../components/tableCell/tableCell';
import styles from './allPages.module.scss';

const AllPages = ({ allPagesData }) => {

	console.log(allPagesData)

	return (
		<div className={styles.wrapper}>
			<table>
				<thead>
				<tr>
					<th>Page name</th>
					<th>View page</th>
					<th>Source page</th>
				</tr>
				</thead>
				<tbody>
				{allPagesData?.map((page, index) => {
					const pageValue = page.page.split('page=')[1];
					return (
						<React.Fragment key={index}>
							<TableCell link={page.page} namePage={pageValue} />
						</React.Fragment>
					);
				})}
				</tbody>
			</table>
		</div>
	);
};

export default AllPages;


export async function getServerSideProps() {
	try {
		const response = await fetch('https://builder.smart-ui.pro/all');
		const data = await response.json();

		return {
			props: {
				allPagesData: data.pages,
			},
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			props: {
				allPagesData: [],
			},
		};
	}
}
