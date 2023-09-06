import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./ListPages.css";

export default function ListPages({queryPageParam}) {
    const [listPages, setListPages] = useState([]);
    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {

        document.querySelector('.container').style.opacity = 0; // optional: hide area until content loaded

        axios.get('/loadAllPages')
            .then(response => {
                const data = response.data;
                if (data.success) {
                    const pages = data.pages;
                    setListPages(pages);
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    }

    return (
        <>
            <ul>
                {
                    listPages.map((page, index) => {
                        return (
                            <li key={index}>
                                <a href={`edit${page.page}`}>Edit {page.page}</a>
                            </li>
                        );
                    })
                }
            </ul>

            <div className="panel-home is-cms">
                <section>
                    <Link className="is-btn" to={'/edit'}>Edit</Link>
                </section>
            </div>


            <div className="container">
            </div>

        </>
    );
}
