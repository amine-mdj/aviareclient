import { useState } from 'react'
import './forgotpassword.css'
import axiosInstance from '../axiosInstance'


const ForgotPassword = ()=>{
    const [email, setEmail] = useState('')

    const handlechange = (e) =>{
        setEmail(e.target.value)
    }

    const handlesend = async () =>{
     const res = await axiosInstance.post("/auth/sendpasswordlink",{email:email })
     console.log(res)
    }

    return(<div className="resetcontainer">
        <div className="resetinner">
            <h1>Entrer Votre Email</h1>
            <label>Email</label><br/> 
            <input type="email" value={email} onChange={handlechange} placeholder='    entrer votre adress email'></input><br/>
            <button onClick={handlesend}>Envoyer</button><br/>
        </div>
        </div>)
}

export default ForgotPassword