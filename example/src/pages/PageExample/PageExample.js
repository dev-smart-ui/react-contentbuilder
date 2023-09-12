import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
const PageExample = () => {
    const [dataFromCms, setDataFromCms] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('page');

    useEffect(() => {
        axios.get(`https://builder.smart-ui.pro/load?page=?page=${id}`).then(({ data }) => {
            setDataFromCms(data.html);
        });
    }, [id]);

    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) {
                return;
            }

            if (attribs["data-custom"] === 'converter') {
                return <h1 style={{ fontSize: 42 }}>{domToReact(children, options)}</h1>;
            }

            if (attribs.class === 'prettify') {
                return (
                    <span style={{ color: 'hotpink' }}>
          {domToReact(children, options)}
        </span>
                );
            }
        }
    };
    const jsx =parse(dataFromCms , options)
    console.log(jsx)
    return (
        <div className="container">
            <h1>test</h1>
            {/*<div dangerouslySetInnerHTML={{ __html: dataFromCms }} />*/}
            {jsx}
        </div>

    );
};

export default PageExample;
