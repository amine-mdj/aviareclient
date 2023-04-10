import { styled } from '@mui/material/styles';
import './welcomeadmin.css'
import { useNavigate } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const Welcomeadmin = () =>{
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/')
    }
    return(<div style={{width:'100vw', height:'100vh'}}>
        <DrawerHeader />
        <h1 style={{margin:'20px'}}>Welcome admin</h1>
        <div onClick={handleClick}
         style={{position:'fixed',
        right:0,top:'50%',
        backgroundColor:'#fb8c00',
         textAlign:'center',
         padding:'5px 10px',
         cursor:'pointer'
         }}
         >
            <div style={{position:'absolute',
             height:'100%',

             }}>
            <i class="fa-solid fa-caret-left fa-2xl" style={{color: '#ffffff'}}></i>
            </div>
            <p style={{color:'white'}}>swith to </p>
            <p style={{color:'white'}}>CLIENT APP</p>
        </div>
        </div>)

}

export default Welcomeadmin