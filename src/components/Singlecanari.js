import react from 'react'
import './singlecanari.css'
 
const Singlecanari = ({image, title, price})=>{
    return(
        <div className="canari">
            <img src={`data:image/png;base64,${image}`} alt="bird" className='imgcanari'/>
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    )
}

export default Singlecanari