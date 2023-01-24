import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
// import { register, reset } from '../features/auth/authSlice'
import styles from './register.module.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
      

      

      const onnameChange = (e) => {
        setName(e.target.value)
      }
      const onemailChange = (e) => {
        setEmail(e.target.value)
      }
      const onpasswordChange = (e) => {
        setPassword(e.target.value)
      }
        

      const onSubmit = (e) => {
        e.preventDefault()
           
       const user = {
          name:name,
          email: email,
          password:password
        }
          axios.post('http://localhost:8000/register', user)
          .then(function (response) {
            if (response.status == 200)
            {
              navigate('/moncompte')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      

    return (
        <div className={styles.log}>
            <div>
            <h1>Je cree mon compte</h1>
            <form onSubmit={onSubmit}>
            <label>*Votre nom</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-regular fa-user icon"></i>
             <input className={styles.inputfield}
               type="text"
               value={name}
               onChange={onnameChange}/>
             </div><br/>
             <label>*Votre adresse e-mail</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-regular fa-envelope icon"></i>
             <input className={styles.inputfield}  type="email"
             value={email}
             onChange={onemailChange}/>
             </div><br/>
             
             <label>*Votre mot de passe</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-solid fa-lock icon"></i>
             <input className="input-field"  type="password"
             value={password}
             onChange={onpasswordChange}/>
             </div>
             <p>mot de passe oublié</p>
             <input type="submit" value="Register"/><br/>
            </form>
            </div>
        </div>
    )
}

export default Register