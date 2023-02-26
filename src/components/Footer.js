import React from 'react'
import {useLocation} from 'react-router-dom'
import styles from './footer.module.css'
import visa from '../img/visa-cc.png';
import mastercard from '../img/mastercard-cc.png';
import paypal from '../img/paypal-cc.png';
import { useTranslation } from 'react-i18next';

const Footer = ()=>{
    const {t} = useTranslation(['quisn'])
    const location = useLocation()
    const result = location.pathname.includes('admin')
    if (!result){
    return (<div className={styles.footer}>
        <p className={styles.title}>{t("INFORMATIONS PRATIQUES")}</p>
        <div className={styles.grid}>
            <p>{t("nos services sur mesure")}</p>
            <p>{t("Conditions generales de ventes")}</p>
            <p>{t("Mentions legales")}</p>
            <p>{t("Information livraison")}</p>
            <p>{t("CGV spaciale oiseaux")}</p>
            <p>{t("Contact")}</p>
        </div>
       <div className={styles.flex}>
        <div className={styles.icons}>
            <ul>
                <li><i class="fa-brands fa-facebook-f"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-pinterest-p"></i></li>
                <li><i class="fa-brands fa-youtube"></i></li>
            </ul>
        </div>
        <div className={styles.nosmoyens}>
            <div>
            <p>{t("Nos moyens de paiement")}</p>
            <div className={styles.divimg}>
            <img src={visa} alt="visa logo" />
            <img src={mastercard} alt="mastercard logo" />
            <img className={styles.paypal} src={paypal} alt="paypal logo" />
            </div>
            </div>
        </div>
       </div>
    </div>)}
}

export default Footer