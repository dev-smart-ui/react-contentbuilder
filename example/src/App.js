import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import AllPages from "./pages/AllPages/AllPages";
import PageExample from "./pages/PageExample/PageExample";
import React, {useEffect, useState} from "react";
import DynamicPage from "./pages/DynamicPage";
import axios from "axios";

function App() {
    const [allPagesData, setAllPagesData] = useState([]);

    useEffect(() => {
        axios.get("https://builder.smart-ui.pro/all").then(({data}) => {
            setAllPagesData(data.pages);
        });
    }, []);

    return (
        <BrowserRouter>
                <nav><Link className="text-center transition-all inline-block cursor-pointer no-underline border-2 border-solid  mb-2  size-14 uppercase py-3  border-current text-indigo-500 hover:bg-indigo-500 hover:text-white hover:border-transparent font-semibold rounded-full" to="/all-pages">AllPages</Link></nav>
            <Routes>
                <Route path="/all-pages" element={<AllPages allPagesData={allPagesData} />} />
                <Route path="/page-example" element={<PageExample />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
