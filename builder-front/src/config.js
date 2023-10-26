// const baseRazorUrl = "http://localhost:3004/"
const baseRazorUrl = "https://razor-contentbuilder.vercel.app/"
// const baseBuilderUrl = "http://localhost:3003/"
const baseBuilderUrl = "https://react-contentbuilder-phi.vercel.app/"

export const CONFIG = {
    getBlockUrl: `${baseRazorUrl}api/custom-builder`,
    baseRazorUrl,
    baseBuilderUrl,
}
