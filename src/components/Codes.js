import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { Link } from "react-router-dom";

const fetchData = ()=>{
	return axios({
		url: `https://express-contain-2022.fly.dev/codes/all`,
	}).then((res)=>{
		return res.data 
	})
}

export const Codes = ()=>{

	const { isLoading, error, data } = useQuery({
    queryKey: ['codes'],
    queryFn: () => fetchData(),
  })

  if(isLoading){
  	return <h2>Loading...</h2>
  }

  if (error) return 'An error has occurred: ' + error.message

	return (
		<div>
			{data?.map((code, index)=>{
	    	return (<h4 key={code._id}><Link to={`/code/${code._id}`}>{code.title}</Link></h4>)
	    })}
		</div>
	)
}