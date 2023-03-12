import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'


const Testoauth1 = () =>{
    const [user, setUser] = useState('no user')
    const navigate = useNavigate()

    axios.get("http://localhost:8000/auth/login/success").then(response => {
        // setUser(response.data.user)
        console.log(response)
        })

    

    const handleclick = ()=>{
        navigate('/testoauth2')
    }
    if(user !== 'no user'){
        return(<div className="testoauth1">
        <p>hello {user.name}</p>
        <p>this is test oauth1</p>
        <button onClick={handleclick}>testoauth2</button>
    </div>)
    }
    else{
       return <Navigate to='/'/>
    }
    
}

export default Testoauth1