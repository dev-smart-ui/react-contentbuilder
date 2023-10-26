import React from 'react';
import {CONFIG_RAZOR, onlyForBuilder} from "./config";
import Link from "next/link";

type TCustomProps={
    [key: string]: "src"|"textContent"|"href";
}


const IsEditable = (params :TCustomProps )=>{
     return {"data-propsname":JSON.stringify(params)}
}

  const Test = ({mainText="default text"}) => {

    return <div  data-component={"Test"} >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span {...IsEditable({text: "textContent"})} >
            {mainText}
        </span>

        <img   {...IsEditable({image: "src"})} src={CONFIG_RAZOR.imgPlaceholder} alt=""/>
        {onlyForBuilder()&& <div>  hidden 0</div>}
        <Link   {...IsEditable({href: "href", linkText: "textContent"})} href={"/pageExample/user"}>1123  </Link>
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
