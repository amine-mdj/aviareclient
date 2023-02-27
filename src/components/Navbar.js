import React, {useEffect, useState} from 'react'
import {useNavigate,useLocation, NavLink} from 'react-router-dom'
import axios from 'axios'
import styles from './navbar.module.scss'
import { useTranslation } from 'react-i18next'

const Navbar = ()=>{
  const location = useLocation()
  const [data, setData] = useState('empty')
  const [search, setSearch] = useState('')
  const Navigate = useNavigate()
  const accesstoken = localStorage.getItem('accesstoken');
  const result = location.pathname.includes('admin')

  const {i18n, t} = useTranslation(['common'])
  
  const navLinkStyles = ({isActive}) =>{
    return {
      fontWeight: isActive? 'bold' : 'normal'
    }
  }
  const handleClick = () =>{
    if (accesstoken == null){
    Navigate('/login')
    }else{
      Navigate('/moncompte')
    }
  }

  const handleClick2 = ()=>{
    Navigate('/')
  }
 
  useEffect(()=>{
    
    const controller = new AbortController();
    if (search !== ''){
      
      axios
    .get(`http://localhost:8000/canarilistsearch?search=${search}`,{
      signal: controller.signal
    })
    .then((res) =>{
      
      if (search !== ''){
        console.log('axios fired ' + search)
    setData(res.data)
      }
    
    }, )
    .catch();
      
    }
    else{
      
      setData('empty')
      console.log('data :' + data)
    }

    return ()=>{
      // cancel the previous request when the input value has changed
      controller.abort()
    }
  },[search])

  const handleChange = (e)=>{
    setSearch(e.target.value)
   }

   const handlelanguagechange = (value) =>{

        i18n.changeLanguage(value)
       
   }

  const items = data !== 'empty' ? <div className={styles.dropdown}>
        {data.map((item, index) => <p key={index}>{item.title}</p>)}
    </div> : null
  
  
  if(!result){
    return (<div>
        <div className={styles.nav1}>
         <i onClick={handleClick} class="fa-regular fa-user fa-lg"><p>{t("mon compte")}</p></i>
         <div className={styles.langue}>
          <i onClick={handleClick} style={{fontSize:'1.3em'}} class="bi bi-translate"></i><p>{t("langues")}</p>
          <div className={styles.langul}>
            <ul>
            <li id="1"  onClick={()=>handlelanguagechange('fr')}>{t("francais")}</li>
            <li id="2" value='ar' onClick={()=>handlelanguagechange('ar')}>{t("arab")}</li>
          </ul>
          </div>
          
          </div>
         </div>
        <div className={styles.nav2}>
        <div className={styles.searchcontainer}>
        <input value={search} onChange={handleChange} type="text" id="fname" name="fname" placeholder={t("Rechercher dans le catalogue")}/>
        {items}
        </div>
        <p onClick={handleClick2}><span>A</span>viaire-dz</p>
        </div>
        {/* <div className='nav3'><ul>
            <li><a href="#">ACCEUIL</a></li>
            <li><a href="#">OISEAUX</a>
            
            
            </li>
            <li><a href="#">MATERIEL ET ALIMENTATION</a></li>
            <li><a href="#">ASTUCES ET CONSEILS</a></li>
            <li><a href="#">QUI SOMMES NOUS</a></li>
            </ul></div> */}
            <nav className={styles.nav}>
    <ul className={styles.nav__list}>

    <li className={styles.nav__listitem}><NavLink style={navLinkStyles} className={styles.linkstyle} to='/'>{t("ACCEUIL")}</NavLink></li>
      
      <li className={styles.nav__listitem}><NavLink style={navLinkStyles} className={styles.linkstyle} to='/acceuil/oiseaux/canarilist'>{t("OISEAUX")}</NavLink>
        <ul className={styles.nav__listitemdrop}>
          <li>Canari</li>
          <li>Exotique</li>
          <li>Peroquet</li>
          <li>peruche</li>
        </ul>
      </li>
      <li className={styles.nav__listitem}><NavLink style={navLinkStyles} className={styles.linkstyle} to='/acceuil/materiels'>{t("MATERIELS ET ALIMENTATION")}</NavLink>
        <ul className={styles.nav__listitemdrop}>
          <li>Alimentation</li>
          <li>Cages et Volieres</li>
        </ul>
      </li>
      <li className={styles.nav__listitem}><NavLink style={navLinkStyles} className={styles.linkstyle} to='/astuces-et-conseils'>{t("ASTUCES ET CONSEILS")}</NavLink></li>
      <li className={styles.nav__listitem}><NavLink style={navLinkStyles} className={styles.linkstyle} to='/qui-sommes-nous'>{t("QUI SOMMES NOUS")}</NavLink></li>
    </ul>
  </nav>
    </div>)}
}

export default Navbar