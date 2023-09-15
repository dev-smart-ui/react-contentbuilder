import React from 'react';
import Link from 'next/link';

export const TableCell = ({ link, namePage }) => {
	const url = `/pageExample/${link}`;
	const urlSource = `/source/${link}`;

	return (
		<tr>
			<td>{namePage}</td>
			<td><Link href={url}>View page</Link></td>
			<td><Link href={urlSource}>View source</Link></td>
		</tr>
	);
};
