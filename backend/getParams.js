const { JSDOM } = require('jsdom');


const parse = async  ()=>{


    const response = await fetch(`https://builder.smart-ui.pro/load?page=Test1`)
    const data = await response.json()
    const html = data.html



    const dom = new JSDOM(html);
    const document = dom.window.document;
    const images = document.querySelectorAll('img');
    const texts = document.querySelectorAll('[data-textpropsname="mainText"]');

    images.forEach(img => {
        console.log('src картинки:', img.src);
    });

    texts.forEach(text => {
        console.log('Текст компонента:', text.textContent);
    });

}

parse()
