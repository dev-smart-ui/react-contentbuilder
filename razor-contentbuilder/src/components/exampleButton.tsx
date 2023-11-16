import React from 'react';
import {IsEditable} from "@components/config";


export const ExampleButton = ({text="placeholder"}) => {

    return <button  data-component={"button-example"} {...IsEditable({ text: "textContent"})} >
			{text}
    </button>
};

