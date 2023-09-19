import styles from './menu.module.scss'
import {Burger} from "components/burger/burger";
import {useOpen} from "../../hooks/useOpen";
import appConfig from "config/app.config";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import classNames from "classnames";

export const Menu = ({burgerIsOpen, burgerClose, burgerToggle}) => {
	const [allPages, setAllPages] = useState([])
	const [touchStart, setTouchStart] = useState(0);
	const [hasSwiped, setHasSwiped] = useState(false);

	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
		setHasSwiped(false)
	}

	const handleTouchMove = (e) => {
		if (touchStart - e.targetTouches[0].clientX < 40) {
			setHasSwiped(true)
		}
	}

	const handleTouchEnd = () => {
		if (hasSwiped) {
			burgerClose()
		}
	}

	const getAllPages = async () => {
		try {
			const response = await fetch(`${appConfig.baseUrl}all`);
			const data = await response.json();
			const pages = data.pages.map(item => item.page);
			setAllPages(pages)

		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		getAllPages().then()
	}, []);

	useEffect(() => {
		if (burgerIsOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [burgerIsOpen]);


	return (
		<nav
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
			className={classNames(styles.menu, {
				[styles.open]: burgerIsOpen,
			})}>
			<ul>
			{allPages?.map((link, i) => {
				return (
					<li key={`${link}_${i}`}>
						<Link href={`/pageExample/${link}`} onClick={burgerToggle}>{link}</Link>
					</li>
				)
			})}
		</ul>
		</nav>
	)
}