import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
import {Converter} from "../../customBlocks/converter/converter";

import {Request} from "../../customBlocks/request/request";

const PageExample = () => {
    const [dataFromCms, setDataFromCms] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('page');

    useEffect(() => {
        axios.get(`https://builder.smart-ui.pro/load?page=${id}`).then(({ data }) => {
            setDataFromCms(data.html);
        });
    }, [id]);

    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) {
                return;
            }
            if (attribs["data-custom"] === 'converter') {
                return  <Converter data={children} attribs={attribs}/>;
            }
            if (attribs["data-custom"] === 'request') {
                return  <Request data={children} attribs={attribs}/>;
            }
        }
    };
    const jsx =parse(dataFromCms , options)
    return (
        <div className="container">
            <h1>test</h1>
            {/*<div dangerouslySetInnerHTML={{ __html: dataFromCms }} />*/}
            {jsx}
        </div>

    );
};

export default PageExample;
