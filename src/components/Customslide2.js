import React from 'react'
import perroquet from '../img/perroquet.jpg'
import './customslider2.css'

const Customslide2 = ()=>{
    return (
        <div className='outerdiv2'>
        <div className='custom2'>
        <p className='bluepara'>DE SUPERBES OISEAUX SELECTIONNES RiGUREUSEMENT.</p>
        <p className='bluepara'>BEAUTE, QUALITE, SANTE SONT NOTRE EXELENCE.</p>
        <br/>
        
        <h1>FAITES VOTRE CHOIX</h1>
        <br/>
        <p>CANARIS, EXOTIQUES, PERUCHES ET PEROQUETS</p>
          <p> SONT DISPONIBLES</p>
          
        </div>
        <img className='image2' src={perroquet} alt='perroquet'/>
        </div>
    )
}

export default Customslide2