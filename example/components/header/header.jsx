import styles from './header.module.scss';
import {BackButton} from "components/backButton";
import classNames from "classnames";
import {Menu} from "components/menu/menu";


export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={classNames('container', styles.container)}>
				<BackButton />
				<div>header</div>
				<Menu />
			</div>
		</header>
	)
}