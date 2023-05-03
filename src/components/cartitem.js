import { useState } from "react"
import './cartitem.css'


const Cartitem = ({image, title, price}) =>{

    const arr = price.split(":")
    

    return (<>
    <div className="mainitem">
        <img src={`data:image/png;base64,${image}`}/>
        <div className="titleprice">
            <p>{title}</p>
            <p>{arr[1]}</p>
        </div>
        <p className="disponible">Disponible</p>
        <div className="counteritem">
            <span>-</span>
            <p>1</p>
            <span>+</span>
        </div>
        
        <p>{arr[1]}</p>
        
        
    </div>
    <hr className="hr"/>
    </>)
}

export default Cartitem