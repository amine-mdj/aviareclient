import React from 'react'
import './quisommesnous.css'
import { faker } from '@faker-js/faker'
import {useTranslation} from 'react-i18next'

const Quisommesnous = ()=>{
    const {t} = useTranslation(["quisn"])
    return (
        <div className='quisn'>
            <h1>{t("QUI SOMMES-NOUS")}</h1>
            <div className='desc'>
                 
                <div><img src={faker.image.people()}  /></div>
            
                <pre className='descc'>{`
Bonjour,
Titulaire d’un master 2 a luniversité 
de blida ,veterinaire , 
J’ai concu ce site dans le but de vous 
faire découvrir ma passion et de 
vous en faire profiter avec 
 l’acquisition de superbes spécimens 
 tels que :`}</pre>
                
                <ul>
                    <li><i class="fa-solid fa-circle-check" style={{color:"#68C05A", margin:'10px'}}></i>{t("Canaris,")}</li>
                    <li><i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i> {t("Exotiques Australiens , Africains , etc.")}</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>{t("Perruches ,")}</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>{t("Grandes Perruches,")}</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>{t("Perroquets,")}</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>{t("Insectivores,")}</li>
                    <li> <i class="fa-solid fa-circle-check" style={{color:"#68C05A" , margin:'10px'}}></i>{t("Et quelques oiseaux de parc et de jardin.")}</li>
                </ul>
                
            </div>
                  
        </div>)
}

export default Quisommesnous