import { Navigate, Outlet} from 'react-router-dom'
import jwt_decode from "jwt-decode";


const Requireadmin = ({children}) =>{
    const accesstoken = localStorage.getItem('accesstoken')
    const user = jwt_decode(accesstoken)
    console.log('from require admin' + user.role)
    return(
        user?.role !== 'admin' ? <Navigate to='/' /> : <Outlet/>
    )
      
    
}

export default Requireadmin