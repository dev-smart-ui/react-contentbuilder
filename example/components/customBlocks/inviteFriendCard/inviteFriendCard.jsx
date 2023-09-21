

export const InviteFriend = () => {
	return (
		<div className="px-6 py-2 bg-gray-900 relative">
			<div
				style={{
					backgroundImage: "url('')",
					backgroundSize: '100% 100%',
					height: '162px',
					backgroundRepeat: 'no-repeat',
					overflow: 'hidden',
					paddingRight: '100px',
				}}
				className="flex py-6 pl-6 bg-cover bg-center w-full relative rounded-xl"
			>
				<div className="flex flex-col justify-between">
					<div className="text-white text-base font-bold leading-tight">
						Invite your friends to Finology and get Up to $100 benefits.
					</div>
					<a href="#" className="flex space-x-2 text-cyan-500 no-underline">
						<div style={{ fontSize: '12px' }} className="text-xs font-bold leading-tight">
							See How
						</div>
						<div style={{ fontSize: '12px' }} className="text-xs font-bold leading-tight">
							&rarr;
						</div>
					</a>
				</div>
				<img
					style={{
						width: '162px',
						height: '166px',
						position: 'absolute',
						bottom: '-36px',
						right: '-36px',
						mixBlendMode: 'luminosity',
					}}
					src=""
					alt=""
				/>
			</div>
		</div>

	)
}


export const builderInviteFriend = {
	'thumbnail': 'custom/InviteFriend.png ',
	'category': '120',
	'html':
		`
			<div class="px-6 py-2 bg-gray-900 relative data-custom="inviteFriend">
				<div style="background-image: url('assets/minimalist-blocks/images/Rectangle-bg.png');background-size: 100% 100%; height: 162px; background-repeat: no-repeat; overflow: hidden; padding-right: 100px;"
					class=" flex py-6 pl-6 bg-cover bg-center w-full relative rounded-xl ">
					<div class=" flex flex-col justify-between ">

						<div class=" text-white text-base font-bold leading-tight ">
							Invite your friends to Finology and get Up to $100 benefits.
						</div>
						<a href="#" class=" flex space-x-2  text-cyan-500  no-underline ">
							<div style="font-size: 12px;" class=" text-xs font-bold leading-tight ">See How</div>
							<div style="font-size: 12px;" class=" text-xs font-bold leading-tight ">&rarr;</div>
						</a>

					</div>
					<img style="width: 162px; height: 166px; position: absolute; bottom: -36px; right: -36px; mix-blend-mode: luminosity; " src="assets/minimalist-blocks/images/pngegg-box.png" alt="" />
				</div>
			</div>
	`
}
