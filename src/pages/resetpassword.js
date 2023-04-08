import './resetpassword.css'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axiosInstance from '../axiosInstance';



const ResetPassword = ()=>{
    const [password, setPassword] = useState("");
    const { id, token } = useParams();
    const navigate = useNavigate();


    const handlechange = (e)=>{
        setPassword(e.target.value)
    }

    const handlesend = async ()=>{
       const res = await axiosInstance.post(`auth/${id}/${token}`, {password:password})
       console.log(res)
    }



    return(<div className="resetcontainer">
        <div className="resetinner">
            <h1>Nouveaux mot de passe</h1>
            <label>mot de passe</label><br/> 
            <input type="password" value={password} onChange={handlechange} placeholder='    entrer votre mot de passe'></input><br/>
            <button onClick={handlesend}>Envoyer</button><br/>
        </div>
        </div>)
}

export default ResetPassword