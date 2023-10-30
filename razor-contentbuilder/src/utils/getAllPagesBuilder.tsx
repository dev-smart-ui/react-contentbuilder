import {isLocalhost} from "../../services/helpers";
import {CONFIG_RAZOR} from "@components/config";

export async function getAllPagesBuilder(hostName: string) {
	try {
		// оставил пока брать информацию только с прода (разные базы данных)
		const baseUrl = isLocalhost(hostName) ? `${CONFIG_RAZOR.serverUrlProd}` : `${CONFIG_RAZOR.serverUrlProd}`
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
