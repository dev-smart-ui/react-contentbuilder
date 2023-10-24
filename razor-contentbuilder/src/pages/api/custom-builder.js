import Cors from 'cors';
import React from 'react';

import {renderToString} from "react-dom/server";
import {List} from "../../components/list";



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

  const builderUserInfo = {
    'thumbnail': 'custom/userInfo.png ',
    'category': '120',
    'html':
        `
		<div class="w-100 h-16 flex justify-start px-5 py-4 bg-gray-900 space-x-3 " data-custom="userInfo">
			<img style="width: 48px; height: 48px;"
			 class="w-12 h-12 rounded-full" src="/assets/minimalist-blocks/images/image-thumbnail.png" alt="" />
			<div>
				<div data-type=" {mainTextName}"  style="font-size: 12px;"
				 class="text-gray-400 text-xs font-normal leading-none">Welcome back,</div>
				<div style="font-size: 20px;"
				 class="text-white text-xl font-bold leading-relaxed"> {name}</div>
			</div>
		</div>

	`
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    try {
        let renderedComponents = [];

        Object.entries(List).forEach((item)=>{

                const componentHTML = renderToString(React.createElement(item[1]));
                console.log(componentHTML)
                renderedComponents.push({ fileName:[item[0]], html: componentHTML });
            }
        )
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
