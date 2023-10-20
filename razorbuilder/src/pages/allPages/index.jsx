import React, {useEffect, useState} from 'react';
import { TableCell } from '@components/tableCell/tableCell';
import styles from './allPages.module.scss';
import {getAllPagesBuilder} from "@utils/getAllPagesBuilder";


const AllPages = () => {

	const [allPagesBuilder, setAllPagesBuilder] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getAllPagesBuilder();
				setAllPagesBuilder(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}
		fetchData();
	}, []);


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
				{allPagesBuilder?.map((page, index) => {
					const pageValue = page.path.slice(1);
					return (
						<React.Fragment key={index}>
							<TableCell namePage={pageValue} />
						</React.Fragment>
					);
				})}
				</tbody>
			</table>
		</div>
	);
};

export default AllPages;
