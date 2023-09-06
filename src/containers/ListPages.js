import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListPages.css";

export default function ListPages({ queryPageParam }) {
    const [listPages, setListPages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); // Добавляем состояние для загрузки

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        setIsLoaded(false); // Сбрасываем состояние загрузки

        try {
            const response = await axios.get("/loadAllPages");
            const data = response.data;

            if (data.success) {
                setListPages(data.pages || []); // Если pages нет, устанавливаем пустой массив
                setIsLoaded(true); // Устанавливаем состояние загрузки
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("error:", error);
        }
    }

    return (
        <div className="container-box">
            {isLoaded ? (
                listPages.length > 0 ? (
                    <ul>
                        {listPages.map((page, index) => {
                            const url = `edit${page.page}`;
                            const pageValue = url.split("page=")[1];
                            return (
                                <li key={index}>
                                    <a href={url}>Edit {pageValue}</a>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="px-5 py-3 "> You have no pages created yet</p>
                )
            ) : (
                <></>
            )}
            <div className="container"></div>
        </div>
    );
}
