import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import { login, reset } from '../features/auth/authSlice'
import styles from './login.module.css'
import GoogleButton from 'react-google-button'

const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    

    const onemailChange = (e) => {
        setEmail(e.target.value)
      }

      const onpasswordChange = (e) => {
        setPassword(e.target.value)
      }

      const handleclick = ()=>{
        navigate('/register')
      }

      const handlegoogleauth = ()=>{
        window.open("http://localhost:8000/auth/google", "_self");
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
        
        const user2 = {
          email: email,
          password:password,
        }
        
          axios.post('https://aviaire-api.onrender.com/auth/login', user2)
          .then(function (response) {
            console.log(response)
            if (response.status == 200)
            {
              
              localStorage.setItem('accesstoken', JSON.stringify(response.data.accesstoken)) 
              navigate('/moncompte')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    
        
      }

    return (<div className={styles.log}>
        <div>
          <div className={styles.innerdivv1}>
            {/* <button onClick={handlegoogleauth}>Se connecter avec google</button> */}
            <GoogleButton
             label='Se connecter avec google'
            onClick={handlegoogleauth}
/>
            <h1>Je me connecte</h1>
            <form onSubmit={onSubmit}>
             <label>*Votre adresse e-mail</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-regular fa-envelope" style={{color:"grey",marginRight:"5px"}}></i>
             <input className={styles.inputField}  type="email"
             value={email}
             onChange={onemailChange}/>
             </div><br/>
             <div ></div>
             <label>*Votre mot de passe</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-solid fa-lock" style={{color:"grey",marginRight:"5px"}}></i>
             <input className={styles.inputField}  type="password"
             value={password}
             onChange={onpasswordChange}/>
             
             </div>
             <p>mot de passe oublié</p>
             <input type="submit" value="ME CONNECTER"/><br/>
            </form>
            </div>
        </div>
        <div>
          <div className={styles.innerdivv2}>
            <h1>Je crée mon compte</h1>
            <p>Bienvenue chez aviaire<br/>
            faisons connaissance </p>
            <button onClick={handleclick}>CREER MON COMPTE</button>
            </div>
        </div>
    </div>)
}

export default Login