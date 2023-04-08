import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axiosInstance from '../axiosInstance';
// import { register, reset } from '../features/auth/authSlice'
import styles from './register.module.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('champs obligatoire'),
  email: Yup.string().email('inserer un email valide').required('champs obligatoire'),
  password: Yup.string().min(8, "le mot de pass doit contenir au moins 8 caracteres").required('champ obligatoire')
})

const Register = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const formik = useFormik({
      initialValues:{
        name:'',
        email:'',
        password:'',
      },
      onSubmit: values =>{
        
           const user = {
          name: values.name,
          email: values.email,
          password: values.password
        }
          axiosInstance.post('auth/register', user)
          .then(function (response) {
            if (response.status == 200)
            {
              navigate('/moncompte')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      validationSchema,
    })
      

      

      // const onnameChange = (e) => {
      //   setName(e.target.value)
      // }
      // const onemailChange = (e) => {
      //   setEmail(e.target.value)
      // }
      // const onpasswordChange = (e) => {
      //   setPassword(e.target.value)
      // }
        

      // const onSubmit = (e) => {
      //   e.preventDefault()
           
      //  const user = {
      //     name:name,
      //     email: email,
      //     password:password
      //   }
      //     axios.post('http://localhost:8000/register', user)
      //     .then(function (response) {
      //       if (response.status == 200)
      //       {
      //         navigate('/moncompte')
      //       }
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      //   }
      

    return (
        <div className={styles.log}>
            <div>
            <h1>Je cree mon compte</h1>
            <form 
            // onSubmit={onSubmit}
            onSubmit={formik.handleSubmit}
            >
            <label>*Votre nom</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-regular fa-user" style={{color:"grey",marginRight:"5px"}}></i>
             <input style={{border: "none",
                            backgroundColor: "#F2F2F2"}} 
               type="text"
              //  value={name}
              //  onChange={onnameChange}
              name='name'
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
               />

             </div><br/>
             {formik.touched.name && formik.errors.name ? <div className={styles.errormsg}>{formik.errors.name} </div> : null}
             <br/>
             <label>*Votre adresse e-mail</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-regular fa-envelope" style={{color:"grey",marginRight:"5px"}}></i>
             <input style={{border: "none",
                            backgroundColor: "#F2F2F2"}} 
                             type="email"
            //  value={email}
            //  onChange={onemailChange}
            name='email'
             value={formik.values.email}
             onBlur={formik.handleBlur}
              onChange={formik.handleChange}
             />
             </div><br/>
             { formik.touched.email && formik.errors.email ? <div className={styles.errormsg}>{formik.errors.email} </div> : null}
             <br/>
             
             <label>*Votre mot de passe</label><br/>
             <div style={{backgroundColor:'#F2F2F2',
              display:'inline-block',
               padding:'5px 10px',
               borderRadius:'20px',
               margin:'10px 0'
               }} >
             <i className="fa-solid fa-lock" style={{color:"grey",marginRight:"5px"}}></i>
             <input style={{border: "none",
                            backgroundColor: "#F2F2F2"}}
                              type="password"
                              name='password'
            //  value={password}
            //  onChange={onpasswordChange}
             value={formik.values.password}
             onBlur={formik.handleBlur}
              onChange={formik.handleChange}/>
             </div>
             {formik.touched.email && formik.errors.password ? <div className={styles.errormsg}>{formik.errors.password} </div> : null}
             <br/>
             <p>mot de passe oublié</p>
             <input type="submit" value="Register" disabled={!formik.isValid}/><br/>
            </form>
            </div>
        </div>
    )
}

export default Register