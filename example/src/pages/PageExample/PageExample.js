import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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

    console.log(dataFromCms)
    return (
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: dataFromCms }} />
        </div>
    );
};

export default PageExample;
