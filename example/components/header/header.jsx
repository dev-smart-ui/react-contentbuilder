import styles from './header.module.scss';
import {BackButton} from "components/backButton";
import classNames from "classnames";
import {Menu} from "components/menu/menu";
import {Burger} from "components/burger/burger";
import React from "react";
import {useOpen} from "../../hooks/useOpen";


export const Header = () => {
	const { onToggle: burgerToggle, isOpen: burgerIsOpen, onClose: burgerClose } = useOpen();

	return (
		<header className={styles.header}>
			<div className={classNames('container', styles.container)}>
				<BackButton />
				<div>header</div>
				<Burger onBurgerToggle={burgerToggle} isBurgerOpen={burgerIsOpen} />
				{burgerIsOpen && <Menu burgerIsOpen={burgerIsOpen} burgerClose={burgerClose} burgerToggle={burgerToggle}/>}
			</div>
		</header>
	)
}