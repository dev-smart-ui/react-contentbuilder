import React, {useEffect, useState} from 'react';
import styles from './sourceCode.module.css'
import {useLocation} from "react-router-dom";
import axios from "axios";

export const SourceCode = () => {
    const [dataFromCms, setDataFromCms] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('page');

    useEffect(() => {
        axios.get(`https://builder.smart-ui.pro/source-code?page=${id}`).then(({ data }) => {
            setDataFromCms(data.jsx);
        });
    }, [id]);

    console.log(dataFromCms)
    return (
        <div className="container">
            <h1>source code</h1>
            <pre className={styles.code}>
                <code>
                    {dataFromCms}
                </code>
            </pre>

        </div>
    );

};
