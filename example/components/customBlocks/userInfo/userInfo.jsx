export const UserInfo = ({ image = '', firstName = 'Joi', lastName = 'Doo' }) => {
	return (
		<div className="flex items-center p-4 rounded-lg">
			<div className="flex-shrink-0 rounded-full border border-sky-500">

				<img className="w-12 h-12 rounded-full" src={image} alt={`${firstName} ${lastName}`} />
			</div>
			<div className="ml-4">
				<div className="text-lg font-semibold">{firstName}</div>
				<div className="text-sm text-gray-600">{lastName}</div>
			</div>
		</div>
	)
}


export const builderUserInfo = {
	'thumbnail': 'custom/userInfo.png ',
	'category': '120',
	'html':
		`
			<div class="flex items-center p-4 rounded-lg">
			<div class="flex-shrink-0 rounded-full border w-48px border-sky-500">
<!--			<img class="w-12 h-12 rounded-full" src='' alt='' />-->
			</div>
			<div class="ml-4">
			<div class="text-lg font-semibold">{firstName}</div>
			<div class="text-sm text-gray-600">{lastName}</div>
			</div>
			</div>
	`
}


