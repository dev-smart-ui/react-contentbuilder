import fs from 'fs';
import path from 'path';

import { renderToString } from 'react-dom/server';
import React from 'react';
import {toCamelCase} from "@/pages/test";

export default async function handler(req, res) {
    try {
        const templateFolder = "auto/"
        const folderPath = path.join(process.cwd(), templateFolder);
        const fileNames = fs.readdirSync(folderPath);

        let renderedComponents = [];

        for (const fileName of fileNames) {
            const componentExportName = toCamelCase(fileName).replace(".js","")
            console.log(folderPath)
            renderedComponents.push(componentExportName)
            const filePath = path.join(templateFolder, fileName);
            const path2 = "auto/com"
            const component = require(path2) ;
            const code = fs.readFileSync(component, 'utf-8');
            // const componentHTML = renderToString(React.createElement(component));
            // renderedComponents.push({ fileName, html: componentHTML });
        }

        res.status(200).json(renderedComponents);

    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при рендеринге компонентов');
    }
}
