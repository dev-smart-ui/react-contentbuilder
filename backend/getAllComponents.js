
const fs = require("fs");
const path = require("path");


const toCamelCase= (name)=>{
    return name.charAt(0).toUpperCase() + name.slice(1)
}
 async function handler(req, res) {
    try {
        const templateFolder = "../example/auto/autoimports/"
        const folderPath = path.join(process.cwd(), templateFolder);
        const fileNames = fs.readdirSync(folderPath);

        const importsTemplate = [];
        const namesList =[]
        for (const fileName of fileNames) {
            const componentExportName = toCamelCase(fileName).replace(".js", "")
            importsTemplate.push(` import ${componentExportName} from "./autoimports/${fileName}"` )
            namesList.push(componentExportName)
            // const filePath = path.join(templateFolder, fileName);
            // const sourceCode  = fs.readFileSync(filePath, 'utf-8');

                // Получаем React-компонент из модуля
            // const MyComponent = ComponentModule.exports.default || ComponentModule.exports;
            //
            //     // Преобразование компонента в HTML-строку
            // const htmlString = ReactDOMServer.renderToString(React.createElement(MyComponent));
            //
            // console.log(htmlString);

            // const componentModule = await import("../example/auto/com.js");
            // const Component = componentModule.default || componentModule;
            // const code = fs.readFileSync(component, 'utf-8');
            // const componentHTML = renderToString(React.createElement(component));
            // renderedComponents.push({ fileName, html: componentHTML });
        }

        const testTemplate =`
        ${importsTemplate.join(` ;
        
        ` )}
        
          export const List = {
                ${namesList.join(" , ")}
            }
        `
        console.log(testTemplate)
        fs.writeFileSync('list.js', testTemplate);
    } catch (error) {
        console.error(error);
        // res.status(500).send('Ошибка при рендеринге компонентов');
    }
}

 handler()
