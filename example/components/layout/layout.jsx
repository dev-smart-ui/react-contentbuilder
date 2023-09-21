import {Header} from "../header/header";
import {Footer} from "../footer/footer";
import styles from './layout.module.scss'


export const Layout = ({children}) => {


	return (
		<div className={styles.wrapper + " container"}>
			<Header />
			{children}
			{/*<Footer />*/}
		</div>
	)
}
