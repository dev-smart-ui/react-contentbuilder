import styles from './menu.module.scss'
import {Burger} from "components/burger/burger";
import {useOpen} from "../../hooks/useOpen";
import appConfig from "config/app.config";
import {useEffect, useState} from "react";

const navLinks = [
	'link1',
	'link2',
	'link3',
	'link4'
]

export const Menu = () => {
	const { onToggle: burgerToggle, isOpen: burgerIsOpen, onClose: burgerClose } = useOpen();
	const [allPages, setAllPages] = useState([])

	const getAllPages = async () => {
		try {
			const response = await fetch(`${appConfig.baseUrl}all`);
			const data = await response.json();
			console.log(data?.pages)
			// setAllPages()

		} catch (error) {
			console.error('Error fetching data:', error);
			return {
				props: {
					allPagesData: [],
				},
			};
		}
	}

	useEffect(() => {
		getAllPages().then()
	}, []);



	return (
		<nav className={styles.menu}>
			<Burger onBurgerToggle={burgerToggle} isBurgerOpen={burgerIsOpen} />


			<ul>
				{
					navLinks?.map((link, i) => {
						return (
							<li key={i}>
								<a href={link}>{link}</a>
							</li>
						)
					})
				}
			</ul>
		</nav>
	)
}