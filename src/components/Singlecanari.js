import react from 'react'
import './singlecanari.css'
 
const Singlecanari = ({image, title, price})=>{
    const myArray = price.split(":")
    return(
        <div className="canari">
            <img src={`data:image/png;base64,${image}`} alt="bird" className='imgcanari'/>
            <h2>{title}</h2>
            <div>
            <p>{myArray[0]} <br/>
               {myArray[1]}
            </p>
            <div><i style={{fontSize: '1.4em', color:"white"}} class="bi bi-bag-dash"></i></div>
        </div>
        </div>
    )
}

export default Singlecanari