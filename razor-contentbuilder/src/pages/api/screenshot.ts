import puppeteer from 'puppeteer';
import { runMiddleware } from "../../services/helpers";
import axios from "axios";
import { CONFIG_RAZOR } from "@components/config";
import { List_Of_Components } from "@components/list";

async function handler(req, res) {
	await runMiddleware(req, res)

	try {
		for (const componentName in List_Of_Components) {
			if (Object.prototype.hasOwnProperty.call(List_Of_Components, componentName)) {
				const componentUrl = `${CONFIG_RAZOR.baseRazorUrlProd}/preview/${componentName}`;
				const browser = await puppeteer.launch({ headless: "new" });
				const page = await browser.newPage();


				try {
					await page.setViewport({ width: 1920, height: 1080 });
					await page.goto(componentUrl, { waitUntil: 'networkidle0' })

					const componentBoundingBox = await page.$eval(`[data-component="${componentName}"]`, (component) => {
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


					try {
						await new Promise(resolve => setTimeout(resolve, 1000))
						const uploadResponse = await axios.post(`${CONFIG_RAZOR.serverUrlProd}upload-preview`, {
							image: screenshot.toString('base64'),
							filename: componentName,
						})

						if (uploadResponse.status === 200) {
							res.status(200).json({ success: true, message: 'Preview generated successfully' })
						} else {
							res.status(500).json({ success: false, message: 'Error uploading preview to the server' })
						}
					} catch (error) {
						console.error('Ошибка при загрузке скриншота на сервер:', error);
						res.status(500).json({ success: false, message: 'Internal Server Error' })
					}

				} catch (error) {
					console.error('Ошибка при создании скриншота для компонента', componentName, error)
				} finally {
					await browser.close()
				}
			}
		}

		res.status(200).json({ success: true, message: 'Previews generated successfully' })

	} catch (error) {
		console.error('Ошибка при генерации скриншотов:', error);
		res.status(500).json({ success: false, message: 'Внутренняя ошибка сервера' })
	}
}

export default handler
