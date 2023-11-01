// const { JSDOM } = require('jsdom');
//
// const getProps =    (html)=>{
//     const dom = new JSDOM(html);
//     const document = dom.window.document;
//     const elements = document.querySelectorAll('[data-component]');
//     const customProps={}
//
//     elements.forEach((element , i ) => {
//         const componentType = element.getAttribute('data-component')||"type-error";
//         customProps[componentType+""+i]={}
//         const  editableNodes=  element.querySelectorAll('[data-propsname]');
//         editableNodes.forEach((node  )=>{
//             const propsName = node.getAttribute('data-propsname')||"propsname-error"
//             try{
//                 const fields = JSON.parse(propsName)
//                 Object.entries(fields).forEach(field=>{
//                     const propsName=field[0]
//                     const propSource = field[1]
//                     customProps[componentType+""+i][propsName]=node[propSource]
//                 })
//             } catch(e){
//                 console.log(e)
//             }
//             // Object.entries()
//             // if(componentType&&propsName&&source){
//             //     customProps[componentType+""+i][propsName] = node[source]
//             // }
//         })
//     });
//
//     return JSON.stringify(customProps)
// }
//
//
// module.exports = getProps


const { JSDOM } = require('jsdom');

const getProps = (html) => {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const parentElement = document.querySelector('[data-component="Slider"]');
    const childElementsWithProps = parentElement.querySelectorAll('[data-propsname]');
    const propsList = [];

    childElementsWithProps.forEach((element) => {
        const propsName = element.getAttribute('data-propsname');
        if (propsName) {
            try {
                const props = JSON.parse(propsName);
                propsList.push(props);
            } catch (e) {
                console.log(e);
            }
        }
    });

    return propsList;
}

module.exports = getProps

