

const baseRazorUrl = "http://localhost:3004/"
const baseBuilderUrl = "http://localhost:3003/"

export const CONFIG_RAZOR= {
    imgPlaceholder :baseRazorUrl+ "placeholder.png",
    baseBuilderUrl
}


export const onlyForBuilder = ()=>{
    return  !!process.env.IN_API_CONTEXT
}
