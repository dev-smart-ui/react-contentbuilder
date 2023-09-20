

export const UserInfo = () => {
	return (
		<div className="w-100 h-16 row justify-start px-5 py-4 bg-gray-900 space-x-3 ">
			<img className="w-12 h-12 rounded-full fill-current" src="" alt="" />
			<div>
				<div style={{fontSize: '12px' }}
				 className="text-xs text-gray-400 font-normal leading-none ">Welcome back,</div>
				<div style={{fontSize: '20px' }}
				className="text-white text-xl font-bold leading-relaxed">Joi Doo</div>
			</div>
		</div>
	)
}


export const builderUserInfo = {
	'thumbnail': 'custom/userInfo.png ',
	'category': '120',
	'html':
		`
		<div class="w-100 h-16 row justify-start px-5 py-4 bg-gray-900 space-x-3 " data-custom="userInfo">
			<img style="width: 48px; height: 48px;"
			 class="w-12 h-12 rounded-full" src="assets/minimalist-blocks/images/image-thumbnail.png" alt="" />
			<div>
				<div style="font-size: 12px;"
				 class="text-gray-400 text-xs font-normal leading-none">Welcome back,</div>
				<div style="font-size: 20px;"
				 class="text-white text-xl font-bold leading-relaxed">Joi Doo</div>
			</div>
		</div>

	`
}


