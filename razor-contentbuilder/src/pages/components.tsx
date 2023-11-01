import useSWR from "swr";
const fetcher = url => fetch(url).then(r => r.json())
export default function Page (){

	const { data, error } = useSWR('/api/custom-builder', fetcher)

	if(!data){
		return <div>loading</div>
	}
	return <div>
		{data.map((item)=>{
		return	<div dangerouslySetInnerHTML={{__html:item.html}}/>
		})}
	</div>
}
