import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import "./headInput.css";

const HeadInput = () => {
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
        history.push(`edit?=${inputValue}`);
        window.location.reload();
    };

    return (
        <div className="head-input-wrap ">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="head-input"
            />
            <button
                onClick={handleButtonClick}
                className="head-input-btn"
            >
                Add URL-path
            </button>
        </div>
    );
};

export default HeadInput;