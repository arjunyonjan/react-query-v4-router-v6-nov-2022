import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchData = (id)=>{
	return axios({
		url: `https://express-contain-2022.fly.dev/codes/${id}`,
	}).then((res)=>{
		return res.data 
	})
}

export const useCodeData = (id)=>{
	return useQuery({
	    queryKey: ['code'],
	    queryFn: () => fetchData(id),
	  })
}