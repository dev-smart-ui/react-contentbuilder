import React, {useEffect, useRef, useState} from "react";
import "./ListPages.css";
import {instanceAxios} from "../axiosConfig";
import axios from "axios";

export default function ListPages({ queryPageParam }) {
    const [listPages, setListPages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        setIsLoaded(false);

        try {
            const response = await instanceAxios.get("/all");
            const data = response.data;

            if (data.success) {
                setListPages(data.pages || []);
                setIsLoaded(true);
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
                            const url = `edit?page=${page.page}`;
                            return (
                                <li className="mb-1"  key={index}>
                                    <a className="hover:bg-indigo-50 p-1" href={url}>Edit {page.page}</a>
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
            <div className="container">

<DeletePage/>
            </div>
        </div>
    );
}


const DeletePage = ()=>{
     const ref = useRef();
    const handleDelete = (e)=>{
        // e.preventDefault();
        try{
            instanceAxios("/delete?page="+ref.current.value)
        }catch ( e){
            alert(e)
        }

        console.log(ref.current.value)
    }
    return <div>
        <h2> delete pages</h2>
        <form onSubmit={handleDelete} action="">
            <label > page tame <input ref={ref}  type="text"/></label>
            <button> delete</button>
        </form>


    </div>
}
