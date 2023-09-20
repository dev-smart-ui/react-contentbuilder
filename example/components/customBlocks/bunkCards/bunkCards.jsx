

export const BunkCards = () => {
	return (
		<div className=" flex flex-row py-2 px-6 justify-between bg-gray-900 space-x-2">
			<div className=" flex flex-col py-6 pt-4 pb-6 items-start">
				<img className=" w-12 h-12 rounded-full mb-2 " src="assets/minimalist-blocks/images/image-thumbnail.png" alt="" />
				<div className=" text-white text-lg font-bold leading-normal mb-1 ">HDFC Fund</div>
				<div className=" text-zinc-400 text-xs font-normal leading-none mb-4 ">NSE</div>
				<div className=" text-white text-sm font-bold mb-1 ">17,691.25</div>
				<div className=" text-teal-400 text-xs font-bold ">+159.20 (0.91%)</div>
			</div>

			<div className=" flex flex-col py-6 pt-4 pb-6 items-start ">
				<img className=" w-12 h-12 rounded-full mb-2 " src="assets/minimalist-blocks/images/image-thumbnail.png" alt="" />
				<div className=" text-white text-lg font-bold mb-1 ">Axis Bank</div>
				<div className=" text-zinc-400 text-xs font-normal leading-none mb-4 ">BSE</div>
				<div className=" text-white text-sm font-bold mb-1 ">59,299.32</div>
				<div className=" text-teal-400 text-xs font-bold ">+533.74 (0.91%)</div>
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
			 class=" flex flex-col px-6 pt-4 pb-6 items-start rounded-lg bg-cover bg-center bg-no-repeat">

				<img style="width: 40px; height: 40px;" 
				class=" w-12 h-12 rounded-full mb-2 " 
				src="assets/minimalist-blocks/images/image-thumbnail-1.png" alt="" />
				<div class=" text-white text-lg font-bold mb-1 ">HDFC Fund</div>
				<div class=" text-gray-400 text-xs font-normal leading-tight mb-4 ">NSE</div>
				<div class=" text-white text-sm font-bold mb-1">17,691.25</div>
				<div class=" text-teal-400 text-xs font-bold ">+159.20 (0.91%)</div>

			</div>
			<div style=" background-image: url('assets/minimalist-blocks/images/Rectangle-bank-card-2.png'); width: 159px; height: 177px; background-size: cover; "
			 class=" flex flex-col px-6 pt-4 pb-6 items-start rounded-lg bg-cover bg-center bg-no-repeat">

				<img style="width: 40px; height: 40px;" 
				class=" w-12 h-12 rounded-full mb-2 "
				src="assets/minimalist-blocks/images/image-thumbnail-2.png" alt="" />
				<div class=" text-white text-lg font-bold mb-1 ">Axis Bank</div>
				<div class=" text-gray-400 text-xs font-normal leading-tight mb-4 ">BSE</div>
				<div class=" text-white text-sm font-bold mb-1">59,299.32</div>
				<div class=" text-teal-400 text-xs font-bold ">+533.74 (0.91%)</div>

			</div>
		</div>
	`
}