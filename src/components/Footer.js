import React from 'react'
import styles from './footer.module.css'
import visa from '../img/visa-cc.png';
import mastercard from '../img/mastercard-cc.png';
import paypal from '../img/paypal-cc.png';

const Footer = ()=>{
    return (<div className={styles.footer}>
        <p className={styles.title}>INFORMATIONS PRATIQUES</p>
        <div className={styles.grid}>
            <p>nos services sur mesure</p>
            <p>Conditions generales de ventes</p>
            <p>Mentions legales</p>
            <p>Information livraison</p>
            <p>CGV spaciale oiseaux</p>
            <p>Contact</p>
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
            <p>Nos moyens de paiement</p>
            <div className={styles.divimg}>
            <img src={visa} alt="visa logo" />
            <img src={mastercard} alt="mastercard logo" />
            <img className={styles.paypal} src={paypal} alt="paypal logo" />
            </div>
            </div>
        </div>
       </div>
    </div>)
}

export default Footer