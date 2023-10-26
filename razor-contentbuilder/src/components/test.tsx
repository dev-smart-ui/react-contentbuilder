import React from 'react';
import {CONFIG_RAZOR, onlyForBuilder} from "./config";
import Link from "next/link";

const IsEditable = ()=>{
    
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
        <span data-propsname={"{text:textContent}"}>
            {mainText}
        </span>

        <img   data-propsname={"{src:img}"} src={CONFIG_RAZOR.imgPlaceholder} alt=""/>
        {onlyForBuilder()&& <div>  hidden 0</div>}
        <Link   data-propsname={"{href:href, linkText:textContent}"}  href={"/pageExample/user"}>link  </Link>
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
