// import avatarImage from '@root/';

export const UserInfo = ({ image = '', firstName = 'Joi', lastName = 'Doo' }) => {
	return (
		<div className="w-100 h-16 flex justify-start px-5 bg-gray-900 gap-3">
			<img className="w-12 h-12 rounded-full" src={image} alt={`${firstName} ${lastName}`} />
			<div className="mt-3">
				<div className="text-gray-400 text-xs font-normal leading-none">Welcome back,</div>
				<div className="text-white text-xl font-bold leading-relaxed">{`${firstName} ${lastName}`}</div>
			</div>
		</div>
	)
}


export const builderUserInfo = {
	'thumbnail': 'custom/userInfo.png ',
	'category': '120',
	'html':
		`
			<div class="flex items-center p-4 rounded-lg" data-custom="userInfo">
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


