import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const DynamicPage = () => {
    const [dataFromCms, setDataFromCms] = useState("");
    const { id } = useParams(); // Получение ID из URL
    console.log("DynamicPage")

    useEffect(() => {
        // Используйте ID для получения данных
        debugger
        axios.get(`https://builder.smart-ui.pro/load?page=${id}`).then(({ data }) => {
            setDataFromCms(data.html);
        });
    }, [id]); // Зависимость от ID

    return (
        <div className="container">
            <div dangerouslySetInnerHTML={{ __html: dataFromCms }} />
        </div>
    );
};

export default DynamicPage;
