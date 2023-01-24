import React from 'react'
import image1 from '../img/Oiseaux.png';
import './customslider1.css'



const Customslide1 = ()=>{
    return (
        <div className='outerdiv'>
        <div className='title1'>
          <h1 >UNE LARGE GAMME </h1>
          <h1>DE PRODUITS</h1>
        </div>
        <div className='description1'>
           <p><i class="fa-solid fa-check fa-2xl" style={{color:"#48d73f"}}></i>ACCESSIORES ET ALIMENTATION</p>
           <p><i class="fa-solid fa-check fa-2xl" style={{color:"#48d73f"}}></i>CAGES, VOLIERES, JOUETS</p>
           <p><i class="fa-solid fa-check fa-2xl" style={{color:"#48d73f"}}></i>TOUT POUR LE BIEN ERE DE VOS OISEAUX</p>
        </div>
        <img  src={image1} alt="cage oiseaux"/>
        </div>
    )
}

export default Customslide1