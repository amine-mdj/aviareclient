import { Navigate, Outlet} from 'react-router-dom'


const Requireadmin = ({children}) =>{
    const user = JSON.parse(localStorage.getItem('user'))
    
    return(
        user?.role !== 'admin' ? <Navigate to='/login' /> : <Outlet/>
    )
      
    
}

export default Requireadmin