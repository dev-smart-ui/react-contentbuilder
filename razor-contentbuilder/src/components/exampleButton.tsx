import React from 'react';
import {IsEditable} from "@components/config";


export const ExampleButton = ({text="placeholder"}) => {

    return <button {...IsEditable({ text: "textContent"})} >
			{text}
    </button>
};

