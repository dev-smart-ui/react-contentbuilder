import {useRouter} from "next/router";
import styles from './backButton.module.scss'

export const BackButton = () => {
	const router = useRouter()

	const goBack = () => {
		router.back()
	}

	return (
		<button onClick={goBack} className={styles.btn}>&larr; Назад</button>
	)
}