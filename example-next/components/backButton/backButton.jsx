import {useRouter} from "next/router";

export const BackButton = () => {
	const router = useRouter()

	const goBack = () => {
		router.back()
	};

	return (
		<button onClick={goBack}>&larr; Назад</button>
	)
}