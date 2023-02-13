import { useNavigate } from "react-router-dom"


const Articlecard = ({id,title, image}) => {
    
    const navigate = useNavigate()
    const handleclick = () => {
        navigate(`/article/${id}`)
    }
  return (<div onClick={handleclick} className="article">
    <div className="article_title">
        <h1>{title}</h1>
        <p>this should be the first two lines of the article ...</p>
    </div >
    <div className='article_image'><img src={image}/></div>
       
  </div>)
}

export default Articlecard