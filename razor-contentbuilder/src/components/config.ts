// const baseRazorUrl = "http://localhost:3004/"
const baseRazorUrl = "https://razor-contentbuilder.vercel.app/" // prod
// const baseBuilderUrl = "http://localhost:3003/"
const baseBuilderUrl = "https://react-contentbuilder-phi.vercel.app/" // prod

export const CONFIG_RAZOR= {
    imgPlaceholder :baseRazorUrl+ "placeholder.png",
    baseBuilderUrl,
    baseRazorUrl,
}


export const onlyForBuilder = ()=>{
    return  !!process.env.IN_API_CONTEXT
}
