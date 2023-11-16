import React from 'react';
import {IsEditable} from "@components/config";

const styles = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

export const ExampleButton = ({text="placeholderText"}) => {
    return <div className={styles} data-component={"ExampleButton"}>
         <button   {...IsEditable({ text: "textContent"})} >
             {text}
         </button>
    </div>
};


