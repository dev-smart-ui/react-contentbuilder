import styles from './header.module.scss';
import {BackButton} from "components/backButton";


export const Header = () => {
	return (
		<header className={styles.header}>
			<BackButton />
			<div>header</div>
			<div>burger</div>
		</header>
	)
}