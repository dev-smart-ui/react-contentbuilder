import {CONFIG_RAZOR} from "@components/config";
import {isLocalhost} from "../../services/helpers";

export async function getAllPagesBuilder(hostName: string) {

	try {
		const baseUrl = isLocalhost(hostName) ? `${CONFIG_RAZOR.serverUrl}` : `${CONFIG_RAZOR.serverUrlProd}`
		console.log('getAllPagesBuilder ', hostName)
		const response = await fetch(`${baseUrl}all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			const data = await response.json();
			if (data) {
				return data?.pages.map((item: any, index: number) => ({
					id: `builder-${index + 1}`,
					path: `/${item.page}`,
					label: item.page,
					content: item.content,
				}));

			} else {
				console.error('No data received.');
			}
		} else {
			console.error('Error fetching data:', response.status);
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}
