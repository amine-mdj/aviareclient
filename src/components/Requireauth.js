import { Navigate, Outlet} from 'react-router-dom'


const Requireauth = ({children}) =>{
    const accesstoken = localStorage.getItem('accesstoken')
    console.log('from require auth' + accesstoken)
    return(
        accesstoken == null ? <Navigate to='/login' /> : <Outlet/>
    )
      
    
}

export default Requireauth