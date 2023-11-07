import React, {useEffect, useRef, useState} from "react";
import "./ListPages.css";
import axios from "axios";
import {CONFIG} from "../config";
import {isLocalhost} from "../helpers";
import {toast} from "react-toastify";

export default function ListPages() {
	const [listPages, setListPages] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [hostName, setHostName] = useState('localhost')

	useEffect(() => {
		const hostname = window.location.hostname
		setHostName(hostname)

		setTimeout(() => {
			onLoad().then();
		}, 100)

	}, [hostName]);

	async function onLoad() {
		setIsLoaded(false);

		try {
			const response = await axios.get(`${isLocalhost(hostName) ? CONFIG.serverUrl : CONFIG.serverUrlProd}all`)
			const data = response.data;

			if (data.success) {
				setListPages(data.pages || []);
				setIsLoaded(true);
			} else {
				console.error(data.message);
			}
		} catch (error) {
			console.error("error:", error);
		}
	}

	return (
		<div className="container-box">
			{isLoaded ? (
				listPages.length > 0 ? (
					<ul>
						{listPages.map((page, index) => {
							const url = `edit?page=${page.page}`;
							return (
								<li className="mb-1" key={index}>
									<a className="hover:bg-indigo-50 p-1" href={url}>Edit {page.page}</a>
								</li>
							);
						})}
					</ul>
				) : (
					<p className="px-5 py-3 "> You have no pages created yet</p>
				)
			) : (
				<></>
			)}
			<div className="container">

				<DeletePage/>
			</div>
		</div>
	);
}


const DeletePage = () => {
	const ref = useRef();
	const [hostName, setHostName] = useState('localhost')

	useEffect(() => {
		const hostName = window.location.hostname
		setHostName(hostName)
	}, []);

	const handleDelete = (e) => {
		e.preventDefault();
		try {
			const baseUrl = isLocalhost(hostName) ? CONFIG.serverUrl : CONFIG.serverUrlProd;

			axios.get(`${baseUrl}delete?page=${ref.current.value}`).then(responds => {
				toast.success('page deleted')
				window.location.reload();
			})

		} catch (e) {
			toast.error('error')
			alert(e)
		}

		console.log(ref.current.value)
	}
	return (
		<div className="bg-white p-8 rounded-lg shadow-md w-1/3 m-auto">
			<h2 className="text-2xl font-semibold text-black mb-4">Delete Pages</h2>
			<form onSubmit={handleDelete} className="flex flex-col space-y-4">
				<div className="flex flex-col">
					<label htmlFor="pageName" className="text-sm font-medium cursor-pointer text-black">
						Page Name
					</label>
					<input
						ref={ref}
						type="text"
						id="pageName"
						className="border border-gray-300 px-3 py-2 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50 cursor-pointer">
					Delete
				</button>
			</form>
		</div>

	)
}
