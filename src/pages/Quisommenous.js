import React from 'react'
import './quisommesnous.css'
import { faker } from '@faker-js/faker';

const Quisommesnous = ()=>{
    return (
        <div className='quisn'>
            <h1>QUI SOMMES-NOUS</h1>
            <div className='desc'>
                 
                <div><img src={faker.image.people()}  /></div>
            
                <p className='descc'>Bonjour,<br/>

                 Titulaire d’un master 2 a luniversité <br/>
                  de blida ,veterinaire , <br/>
                 J’ai concu ce site dans le but de vous <br/>
                 faire découvrir ma passion et de <br/>
                  vous en faire profiter avec <br/>
                 l’acquisition de superbes spécimens <br/>
                  tels que :
                </p>
                
                <ul>
                    <li><i class="fa-solid fa-circle-check" style={{color:"#68C05A", margin:'10px'}}></i>Canaris,</li>
                    <li><i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i> Exotiques Australiens , Africains , etc.</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>Perruches ,</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>Grandes Perruches,</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>Perroquets,</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>Insectivores,</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>Et quelques oiseaux de parc et de jardin.</li>
                </ul>
                
            </div>
                  
        </div>)
}

export default Quisommesnous