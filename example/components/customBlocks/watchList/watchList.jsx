

export const WatchList = () => {
	return (
		<div className=" bg-gray-900 flex flex-col pt-5 px-5 ">
			<div className=" text-white text-xl font-bold leading-relaxed mb-5 ">Stocks Watchlist</div>
			<div className=" w-100 h-16 border-l-3 border-solid border-teal-400 bg-black rounded-lg flex justify-between p-5 mb-2">
				<div className=" flex-col ">
					<div className=" text-white text-base font-bold leading-tight">Kotak Group</div>
					<div className=" text-gray-400 text-xs font-normal leading-none">Listed in BSE</div>
				</div>
				<div className=" flex-col ">
					<div className=" text-white text-base font-bold leading-tight">$14,691.25</div>
					<div className=" text-teal-400 text-base font-bold leading-tight">+3.4 (0.91%)</div>
				</div>
			</div>
			<div className=" w-100 h-16 border-l-3 border-solid border-red-500 bg-black rounded-lg flex justify-between p-5 mb-2">
				<div className=" flex-col ">
					<div className=" text-white text-base font-bold leading-tight">Reliance Industries</div>
					<div className=" text-gray-400 text-xs font-normal leading-none">Listed in BSE</div>
				</div>
				<div className=" flex-col ">
					<div className=" text-white text-base font-bold leading-tight">$14,691.25</div>
					<div className="  text-red-500 text-base font-bold  leading-tight">-4.4 (0.91%)</div>
				</div>
			</div>
		</div>
	)
}


export const builderWatchList = {
	'thumbnail': 'custom/watchList.png ',
	'category': '120',
	'html':
		`
		<div class=" bg-gray-900 flex flex-col pt-5 px-5 ">
		<div class=" text-white text-xl font-bold leading-relaxed mb-5 ">Stocks Watchlist</div>
		<div class=" w-100 h-16 border-l-3 border-solid border-teal-400 bg-black rounded-lg flex justify-between p-5 mb-2">
			<div class=" flex-col ">
				<div class=" text-white text-base font-bold leading-tight">Kotak Group</div>
				<div class=" text-gray-400 text-xs font-normal leading-none">Listed in BSE</div>
			</div>
			<div class=" flex-col ">
				<div class=" text-white text-base font-bold leading-tight">$14,691.25</div>
				<div class=" text-teal-400 text-base font-bold  leading-tight">+3.4 (0.91%)</div>
			</div>
		</div>
		<div class=" w-100 h-16 border-l-3 border-solid border-red-500 bg-black rounded-lg flex justify-between p-5 mb-2">
			<div class=" flex-col ">
				<div class=" text-white text-base font-bold leading-tight">Reliance Industries</div>
				<div class=" text-gray-400 text-xs font-normal leading-none">Listed in BSE</div>
			</div>
			<div class=" flex-col ">
				<div class=" text-white text-base font-bold leading-tight">$14,691.25</div>
				<div class="  text-red-500 text-base font-bold  leading-tight">-4.4 (0.91%)</div>
			</div>
		</div>
	</div>
	`
}