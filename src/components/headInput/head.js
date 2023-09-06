import React from 'react';
import "./head.css";

const Head = () => {

    return (
        <div className="head-wrap">
            <a href="/list-pages"
               className="text-center transition-all inline-block cursor-pointer no-underline border-2 border-solid border-transparent ml-1 mr-1 mb-2 hover:border-transparent bg-gray-200 hover:bg-gray-300 size-14 tracking-75 uppercase py-3  font-semibold text-gray-600 rounded-full"
            >See all pages</a>
            <a href="/edit"
               className="text-center transition-all inline-block cursor-pointer no-underline border-2 border-solid ml-1 mr-1 mb-2  size-14 tracking-75 uppercase py-3  border-current text-indigo-500 hover:bg-indigo-500 hover:text-white hover:border-transparent font-semibold rounded-full">+
                Add
                new page</a>
        </div>

    );
};
export default Head;
