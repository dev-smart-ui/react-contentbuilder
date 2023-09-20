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
		<div class=" w-100 h-16 flex justify-start gap-3 pl-1.5 bg-gray-900">
		<img class="w-12 h-12 rounded-full" 
		style="width: 48px; height: 48px;"
		src="public/assets/minimalist-blocks/images/image-thumbnail.png"
		alt={firstName} {lastName} />
		<div class=" mt-3" >
			<div class="text-gray-400 text-xs font-normal leading-none">Welcome back,</div>
			<div class="text-white text-xl font-bold leading-relaxed">{firstName} {lastName}</div>
		</div>
	</div>
	`
}


