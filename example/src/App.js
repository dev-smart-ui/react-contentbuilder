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
            <div>
                <nav>
                    <ul>
                        <li><Link to="/all-pages">AllPages</Link></li>
                        <li><Link to="/page-example">page-example</Link></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/all-pages" element={<AllPages allPagesData={allPagesData} />} />
                <Route path="/page-example" element={<PageExample />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
