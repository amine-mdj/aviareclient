import React from 'react'
import image1 from '../img/Oiseaux.png';
import './customslider1.css'
import { useTranslation } from 'react-i18next';


const Customslide1 = ()=>{
  const {t} = useTranslation(["home"])

    return (
        <div className='outerdiv'>
        <div className='title1'>
          <h1 >{t("UNE LARGE GAMME")} </h1>
          <h1>{t("DE PRODUITS")}</h1>
        </div>
        <div className='description1'>
           <p><i class="fa-solid fa-check fa-2xl" style={{color:"#48d73f"}}></i>{t("ACCESSIORES ET ALIMENTATION")}</p>
           <p><i class="fa-solid fa-check fa-2xl" style={{color:"#48d73f"}}></i>{t("CAGES, VOLIERES, JOUETS")}</p>
           <p><i class="fa-solid fa-check fa-2xl" style={{color:"#48d73f"}}></i>{t("TOUT POUR LE BIEN ERE DE VOS OISEAUX")}</p>
        </div>
        <img  src={image1} alt="cage oiseaux"/>
        </div>
    )
}

export default Customslide1