import { useNavigate } from "react-router-dom"
import './articlecard.css'


const Articlecard = ({id,title, image}) => {
    
    const navigate = useNavigate()
    const handleclick = () => {
        navigate(`/article/${id}`)
    }
  return (<div onClick={handleclick} className="article">
    <div className="article_title">
        <h1>{title}</h1>
        
    </div >
    <div className='article_image'><img src={image}/></div>
       
  </div>)
}

export default Articlecard