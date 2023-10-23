import "./head.css";
import Input from "./input";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const Head = ({queryPageParam, rangeValue, setRangeValue}) => {
	const location = useLocation();
	const [lock, setLock] = useState(false)

	const onHandlerRange = (e) => {
		let value = e.target.value
		setRangeValue(+value)
	}

	const onHandlerRebuild = async () => {
		try {
			setLock(true)
			const currentTime = new Date().getTime()
			localStorage.setItem('clickRebuildTime', currentTime.toString())
			await fetch('https://api.vercel.com/v1/integrations/deploy/prj_Q3Am2SsoSQDBXLZVEgD4IVnophCS/CM4rH0Qt6I')
		} catch (e) {
			console.log(e)
			setLock(false)
		}
	}

	useEffect(() => {
		const buttonClickTime = localStorage.getItem('clickRebuildTime')
		if (buttonClickTime) {
			const currentTime = new Date().getTime()
			const timeDifference = currentTime - parseInt(buttonClickTime)
			if (timeDifference >= 2 * 60 * 1000) {
				setLock(false)
			} else setLock(true)
		}
	}, []);


	return (
    <div>
      <div className="head-wrap p-2 flex-wrap flex w-full">
        <div className="head-btn-box justify-center flex-wrap flex w-1/2 ">
          <a href="/" className="text-center transition-all inline-block cursor-pointer no-underline border-2 border-solid border-transparent ml-1 mr-1 mb-2 hover:border-transparent bg-gray-200 hover:bg-gray-300 size-14 tracking-75 uppercase py-3  font-semibold text-gray-600 rounded-full">
            Home
          </a>

          <a href="/edit" className="text-center transition-all inline-block cursor-pointer no-underline border-2 border-solid ml-1 mr-1 mb-2  size-14 tracking-75 uppercase py-3  border-current text-indigo-500 hover:bg-indigo-500 hover:text-white hover:border-transparent font-semibold rounded-full">
	          + Add new page
          </a>

	        <button disabled={lock} onClick={onHandlerRebuild} className="text-center transition-all inline-block cursor-pointer ml-1 mb-2 bg-red-500 hover:bg-red-700 text-white size-14 py-3 px-4 uppercase font-semibold rounded-full">
		        Rebuild
	        </button>
        </div>

        {location.pathname.includes('edit') && !queryPageParam && <Input/>}
      </div>

      {location.pathname.includes('edit') && queryPageParam &&
        <div className='flex justify-center'>
	        <label className='flex flex-col items-center w-1/5'>
		        <span>Viewport <strong>{rangeValue}</strong> px</span>
		        <input className='cursor-pointer w-full' type="range" onChange={(e) => onHandlerRange(e)} defaultValue={360} min={360} max={480}/>
	        </label>
        </div>
      }
    </div>
	)
}


export default Head

