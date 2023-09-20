

export const BunkCards = () => {
	return (
		<div className=" flex flex-row py-2 px-6 justify-between bg-gray-900 space-x-2">

			<div className=" flex flex-col px-5 pt-4 pb-6 items-start">
				<img className=" w-12 h-12 rounded-full mb-2 " src="assets/minimalist-blocks/images/image-thumbnail.png" alt="" />
				<div style={{ fontSize: '18px' }}
					className=" text-white text-lg font-bold leading-tight mb-1 ">HDFC Fund</div>
				<div style={{ fontSize: '12px' }}
					className=" text-gray-400 text-xs font-normal leading-tight mb-3 ">NSE</div>
				<div style={{ fontSize: '14px' }}
					className=" text-white text-sm font-bold leading-none mb-1 ">17,691.25</div>
				<div style={{ fontSize: '12px' }}
					className=" text-teal-400 text-xs font-bold leading-tight ">+159.20 (0.91%)</div>
			</div>

			<div className=" flex flex-col py-6 pt-4 pb-6 items-start">
				<img className=" w-12 h-12 rounded-full mb-2 " src="assets/minimalist-blocks/images/image-thumbnail.png" alt="" />
				<div style={{ fontSize: '18px' }}
					className=" text-white text-lg font-bold leading-tight mb-1 ">Axis Bank</div>
				<div style={{ fontSize: '12px' }}
					className=" text-gray-400 text-xs font-normal leading-tight mb-3 ">BSE</div>
				<div style={{ fontSize: '14px' }}
					className=" text-white text-sm font-bold leading-none mb-1 ">59,299.32</div>
				<div style={{ fontSize: '12px' }}
					className=" text-teal-400 text-xs font-bold leading-tight ">533.74 (0.91%)</div>
			</div>

		</div>
	)
}

export const builderBunkCards = {
	'thumbnail': 'custom/bunkCards.png ',
	'category': '120',
	'html':
		`
		<div class=" flex flex-row py-2 px-6 justify-between bg-gray-900 space-x-2 "  data-custom="bunkCards">

			<div style=" background-image: url('assets/minimalist-blocks/images/Rectangle-bank-card-1.png'); width: 159px; height: 177px; background-size: cover; "
				class=" flex flex-col pl-4 pr-3 pt-4 pb-6 items-start rounded-lg bg-cover bg-center bg-no-repeat">

				<img style="width: 40px; height: 40px;"
					class=" w-12 h-12 rounded-full mb-2 " src="assets/minimalist-blocks/images/image-thumbnail-1.png" alt="" />
				<div style="font-size: 18px;"
					class=" text-white text-lg font-bold leading-tight mb-1 ">HDFC Fund</div>
				<div style="font-size: 12px;"
					class=" text-gray-400 text-xs font-normal leading-tight mb-3 ">NSE</div>
				<div style="font-size: 14px;"
					class=" text-white text-sm font-bold leading-none mb-1 ">17,691.25</div>
				<div style="font-size: 12px;"
					class=" text-teal-400 text-xs font-bold leading-tight ">+159.20 (0.91%)</div>
			</div>

			
			<div style=" background-image: url('assets/minimalist-blocks/images/Rectangle-bank-card-2.png'); width: 159px; height: 177px; background-size: cover; "
				class=" flex flex-col pl-4 pr-3 pt-4 pb-6 items-start rounded-lg bg-cover bg-center bg-no-repeat">

				<img style="width: 40px; height: 40px;"
					class=" w-12 h-12 rounded-full mb-2 " src="assets/minimalist-blocks/images/image-thumbnail-2.png" alt="" />
				<div style="font-size: 18px;"
					class=" text-white text-lg font-bold leading-tight mb-1 ">Axis Bank</div>
				<div style="font-size: 12px;"
					class=" text-gray-400 text-xs font-normal leading-tight mb-3 ">BSE</div>
				<div style="font-size: 14px;"
					class=" text-white text-sm font-bold leading-none mb-1 ">59,299.32</div>
				<div style="font-size: 12px;"
					class=" text-teal-400 text-xs font-bold leading-tight ">+533.74 (0.91%)</div>
					
			</div>

		</div>
	`
}