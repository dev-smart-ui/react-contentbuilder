import puppeteer from 'puppeteer';
import {capitalizeFirstLetter, runMiddleware} from "../../services/helpers";
import axios from "axios";
import {CONFIG_RAZOR} from "@components/config";


async function handler(req, res) {
	await runMiddleware(req, res)
	const queryParameters = req.query

	let firstParameter
	for (const key in queryParameters) {
		if (Object.prototype.hasOwnProperty.call(queryParameters, key)) {
			firstParameter = queryParameters[key]
			break
		}
	}

	const component = capitalizeFirstLetter(firstParameter);
	const componentUrl = `http://localhost:3004/preview/${component}`;

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	try {
		await page.goto(componentUrl, { waitUntil: 'networkidle0' })

		const componentBoundingBox = await page.$eval(`[data-component="${component}"]`, (component) => {
			const boundingBox = component.getBoundingClientRect()
			return {
				x: boundingBox.x,
				y: boundingBox.y,
				width: boundingBox.width,
				height: boundingBox.height,
			};
		});

		const screenshot = await page.screenshot({
			clip: {
				x: componentBoundingBox.x,
				y: componentBoundingBox.y,
				width: componentBoundingBox.width,
				height: componentBoundingBox.height,
			},
		});

		axios.post(`${CONFIG_RAZOR.serverUrlProd}/upload-preview`, {image: screenshot, filename: component}).then((response) => {

			console.log('response page/api ', response)

		}).catch((err) => {
			console.log(err);
		})

		// await fs.writeFile(`uploads/preview/${component}.png`, screenshot)
		// res.status(200).json({success: true, message: 'Preview generated successfully'})
		// res.setHeader('Content-Type', 'image/png')
		// res.send(screenshot)

	} catch (error) {
		console.error('Ошибка при создании скриншота:', error)
		res.status(500).send('Внутренняя ошибка сервера')
	} finally {
		await browser.close();
	}
}

export default handler
