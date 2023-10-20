import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import "./head.css";

const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const history = useHistory();


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleButtonClick();
        }
    };
    const handleButtonClick = () => {
        history.push(`edit?page=${inputValue}`);
        window.location.reload();
    };

    return (
        <div className="head-input-wrap justify-center items-center flex-wrap flex w-1/2">
            <input
                placeholder="Page name"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className=" mb-2  px-2 py-3 text-base border rounded"
            />
            <button
                disabled={!Boolean(inputValue)}
                onClick={handleButtonClick}
                className="mb-2 text-center px-5 py-3  transition-all inline-block cursor-pointer no-underline border-2 border-solid border-transparent ml-1 mr-1 hover:border-transparent bg-gray-200 hover:bg-gray-300 size-12 tracking-75 uppercase py-3  font-semibold text-gray-600 rounded-full"
            >
                Add page name
            </button>
        </div>
    );
};

export default Input;
