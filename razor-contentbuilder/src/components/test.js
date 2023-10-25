import React from 'react';
import {CONFIG_RAZOR, onlyForBuilder} from "./config";


  const Test = (props) => {

    return <div  data-component={"Test"} >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span data-textpropsname={"mainText"}>
            {props.mainText}
        </span>

        <img data-srcpropsname={"mainImage"} src={CONFIG_RAZOR.imgPlaceholder} alt=""/>
        {onlyForBuilder()&& <span> this text only in builder</span>}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
};


export default Test
