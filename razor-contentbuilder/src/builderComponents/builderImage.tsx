import React, {FC} from 'react';
import Image, {ImageProps, StaticImageData} from "next/image";
import {CONFIG_RAZOR} from "@components/config";
import {StaticRequire} from "next/dist/shared/lib/get-img-props";




export const imageAdopter = (src?: string | StaticRequire | StaticImageData)=>{

    if(!src){
        return CONFIG_RAZOR.imgPlaceholder
    }
    let srcString = ""
    if (typeof src === 'string') {
        srcString= src;
    } else if ('src' in src) { // Допустим, что у StaticImageData есть 'src'
        srcString= src.src;
    } else if (typeof src === 'object' && src.default) { // Допустим, что StaticRequire имеет 'default'
        srcString = src.default.src;
    }

        if (srcString.startsWith("http://") || srcString.startsWith("https://") || srcString.startsWith("/")) {
            return src;
        }


    return `${CONFIG_RAZOR.baseBuilderUrl}/${srcString}`;
}


export const BuilderImage:FC<ImageProps> = ({src ,  ...rest}) => {
        if(process.env.IN_API_CONTEXT){
            return  <div> her</div>
        }
    return         <Image
      src={imageAdopter(src)}
      alt={""}
      {...rest}
    />
};

