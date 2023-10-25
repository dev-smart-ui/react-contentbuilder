const { JSDOM } = require('jsdom');


const parse = async  ()=>{

    const response = await fetch(`https://builder.smart-ui.pro/load?page=user`)
    const data = await response.json()
    const html = data.html

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const elements = document.querySelectorAll('[data-component]');

    elements.forEach((element) => {
        console.log(element);
    });
}

parse()
