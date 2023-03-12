import { useState } from "react"
import {useNavigate } from "react-router-dom"
import axios from 'axios'

const Testoauth2 = () =>{
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    axios.get("http://localhost:8000/auth/login/success") .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        setUser(responseJson.user)
      })


      if (user!==null){
        return(<div className="testoauth">
        <p>hello {user.name}</p>
        <p>this is test oauth2</p>
    </div>)
      }
      else{
        navigate('/')
      }
    
}

export default Testoauth2