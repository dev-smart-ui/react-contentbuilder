import '@/styles/globals.scss'
import '../../../public/assets/minimalist-blocks/content.css'
import '../../../public/assets/ionicons/css/ionicons.min.css'


import {Layout} from "components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
