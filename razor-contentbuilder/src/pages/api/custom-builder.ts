import Cors from 'cors';
import React from 'react';

import {renderToString} from "react-dom/server";
import {List_Of_Components} from "@components/list";



const cors = Cors({
    methods: ['GET', 'POST'],
    origin: '*'
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);

            return resolve(result);
        });
    });
}


export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    try {
        let renderedComponents = [];
      process.env.IN_API_CONTEXT = 'true';
        Object.entries(List_Of_Components).forEach((item)=>{
                const componentHTML = renderToString(React.createElement(item[1]));
                renderedComponents.push({ fileName:[item[0]], html: componentHTML });
            }
        )
      delete process.env.IN_API_CONTEXT;
        const response = renderedComponents.map( item =>{
            return {
                'thumbnail': 'custom/userInfo.png ',
                'category': '120',
                'html':item.html
            }
            }

        )
        res.status(200).json(response);

    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при рендеринге компонентов');
    }
}
