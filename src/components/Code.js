import {useParams} from 'react-router-dom'
import {useCodeData} from '../hooks/useCodeData' //hook


export const Code = ()=>{
	const {id} = useParams()
	const { data } = useCodeData(id)

	return <p>{JSON.stringify(data?.contents)}</p>
}