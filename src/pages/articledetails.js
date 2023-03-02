import { useParams } from "react-router-dom"
import axios from 'axios'
import { useQuery } from 'react-query'
import './articledetail.css'


const fetchData = (id) => {
    return axios.get(`http://localhost:8000/guest/articles/${id}`)
  }

const Articledetails = () =>{
    const {id} = useParams()
    const {data} = useQuery(['article', id],()=> fetchData(id) )
    

    return (<div className="detailmain" dangerouslySetInnerHTML={{__html:data?.data.content}}>
       
    </div>)
}

export default Articledetails