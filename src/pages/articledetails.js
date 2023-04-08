import { useParams } from "react-router-dom"
import { useQuery } from 'react-query'
import './articledetail.css'
import axiosInstance from "../axiosInstance"


const fetchData = (id) => {
    return axiosInstance.get(`guest/articles/${id}`)
  }

const Articledetails = () =>{
    const {id} = useParams()
    const {data} = useQuery(['article', id],()=> fetchData(id) )
    

    return (<div className="detailmain" dangerouslySetInnerHTML={{__html:data?.data.content}}>
       
    </div>)
}

export default Articledetails