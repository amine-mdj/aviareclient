import React from 'react'
import perroquet from '../img/perroquet.jpg'
import './customslider2.css'
import { useTranslation } from 'react-i18next'

const Customslide2 = ()=>{
  const {t} = useTranslation(['home'])
    return (
        <div className='outerdiv2'>
        <div className='custom2'>
        <p className='bluepara'>{t("DE SUPERBES OISEAUX SELECTIONNES RiGUREUSEMENT.")}</p>
        <p className='bluepara'>{t("BEAUTE, QUALITE, SANTE SONT NOTRE EXELENCE.")}</p>
        <br/>
        
        <h1>{t("FAITES VOTRE CHOIX")}</h1>
        <br/>
        <p>{t("CANARIS, EXOTIQUES, PERUCHES ET PEROQUETS")}</p>
          <p> {t("SONT DISPONIBLES")}</p>
          
        </div>
        <img className='image2' src={perroquet} alt='perroquet'/>
        </div>
    )
}

export default Customslide2