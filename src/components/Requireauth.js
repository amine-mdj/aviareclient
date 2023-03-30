import { Navigate, Outlet} from 'react-router-dom'


const Requireauth = ({children}) =>{
    const accesstoken = localStorage.getItem('accesstoken')
    const passportuser = localStorage.getItem('passportuser')
    
    
   return(
        accesstoken == null && passportuser.includes('no user') ? <Navigate to='/login' /> : <Outlet/>
    )
      
    
}

export default Requireauth