import { Navigate, Outlet} from 'react-router-dom'


const Requireauth = ({children}) =>{
    const user = localStorage.getItem('user')
    return(
        user == null ? <Navigate to='/login' /> : <Outlet/>
    )
      
    
}

export default Requireauth