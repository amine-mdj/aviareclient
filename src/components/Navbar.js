import React, {useEffect, useState} from 'react'
import {useNavigate,useLocation, NavLink} from 'react-router-dom'
import styles from './navbar.module.scss'
import { useTranslation } from 'react-i18next'
import axiosInstance from '../axiosInstance'
import Shoppingbag from '../img/shopping-bag.png'
import Shoppingbag2 from '../img/shopping-bag2.png'

const Navbar = ()=>{
  const location = useLocation()
  const [data, setData] = useState('empty')
  const [search, setSearch] = useState('')
  const [isopen, setIsopen] = useState(false)
  const Navigate = useNavigate()
  
  const [passportusernav, setPassportusernav] = useState(JSON.parse(localStorage.getItem('passportusernav')))
  const result = location.pathname.includes('admin')

  const {i18n, t} = useTranslation(['common'])
  
  const navLinkStyles = ({isActive}) =>{
    return {
      fontWeight: isActive? 'bold' : 'normal'
    }
  }
  const handleClick = () =>{
       
      Navigate('/moncompte')
    
  }

  const handleClick2 = ()=>{
    Navigate('/')
  }
 
  useEffect(()=>{
if (location.pathname == '/'){
    axiosInstance.get('auth/login/success').then(response=>{
      localStorage.setItem('passportusernav',JSON.stringify(response.data.user))
      setPassportusernav(response.data.user)
      
     })
    }
    
    const controller = new AbortController();
    if (search !== ''){
      
      axiosInstance.get(`guest/allsearch?search=${search}`,{
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

   const navigateto = (item)=>{
       Navigate(`/acceuil/oiseaux/${item._id}`, {state:item})
       
   }

   const handlelanguagechange = (value) =>{

        i18n.changeLanguage(value)
       
   }

   const handlecart = ()=>{
    Navigate('/panier')
   }

   const shownav = () =>{
    const navv = document.getElementsByClassName(styles.nav__list)
    if(!isopen){
    navv[0].style.height = '350px'
    setIsopen(!isopen)
   }
   else{
    navv[0].style.height = 0
    setIsopen(!isopen)
   }
   }

  const items = data !== 'empty' ? <div className={styles.dropdown}>
        {data.map((item, index) => <p onClick={()=>navigateto(item)} key={index}>{item.title}</p>)}
    </div> : null
  
  
  if(!result){
    return (<div>
        <div className={styles.nav1}>
        
          {passportusernav?.profileImageUrl && <img src={passportusernav.profileImageUrl} referrerpolicy="no-referrer" alt='profile image url'
          style={{height:'30px',width:'30px',borderRadius:'50%',marginTop:'5px',marginRight:'8px'}}/>}
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
          <img src={Shoppingbag} onClick={handlecart} alt='shoppingbag'/>
         </div>
        <div className={styles.nav2}>
        <p onClick={handleClick2}><span>A</span>viaire-dz</p>
        <div className={styles.searchcontainer}>
        <input value={search} onChange={handleChange} type="text" id="fname" name="fname" placeholder={t("Rechercher dans le catalogue")}/>
        {items}
        </div>
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
            <div className={styles.hamenu}><i class="fa-solid fa-bars fa-xl" onClick={shownav} style={{color: '#ffffff'}}></i></div>
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