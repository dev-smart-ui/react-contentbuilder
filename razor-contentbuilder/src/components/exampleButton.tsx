import React from 'react';
import {IsEditable} from "@components/config";


export const ExampleButton = ({text="placeholder"}) => {
    return <button className="btn btn-blue" data-component={"ExampleButton"}
                    {...IsEditable({ text: "textContent"})} >
          {text}
    </button>
};

