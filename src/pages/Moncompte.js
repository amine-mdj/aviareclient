import react, { useEffect } from 'react'
import{useNavigate} from 'react-router-dom'
import './moncompte.css'

const Moncompte = () => {
    const navigate = useNavigate()


    const gotoadmin = () =>{
        navigate('/admin')
    }

    //

const handleclick = () =>{
    const accesstoken = localStorage.getItem('accesstoken')
    if (accesstoken !== null){
        localStorage.removeItem('accesstoken')
        navigate('/login')
    }
    else {
        window.open("https://aviaire-api.onrender.com/auth/logout", "_self");
    }
    
    
}



    return(
        <div className='div0mc'>
            <div onClick={gotoadmin} className='orangediv' >
            <div style={{position:'absolute',
             height:'100%',

             }}>
            <i class="fa-solid fa-caret-left fa-2xl" style={{color: '#ffffff'}}></i>
            </div>
            <p style={{color:'white'}}>swith to </p>
            <p style={{color:'white'}}>ADMIN PANEL</p>
        </div>
            <div className='div1mc'>
                <p>Acceuil &gt; Mon compte</p>
                <button onClick={handleclick}>DECONNEXION</button>
            </div>
            <div className='div2mc'>
                <h2>Bonjour john</h2>
                <p>Bienvenue dans votre espace client. Dans cet espace
                     vous pourrez consulter l'état de vos commandes,
                     éditer vos informations personnelles ou encore gérer
                      votre abonnement à la newsletter.</p>
            </div>
            <div className='div3mc'>
                <div className='div30mc'>
                    <h2>Ma messagerie</h2>
                    <p>vous avez</p>
                    <p>0</p>
                    <p>Messages non lus</p>
                </div>
                <div className='div30mc'>
                <h2>Mes commandes</h2>
                    <p>vous avez</p>
                    <p>0</p>
                    <p>commandes en cours</p>
                </div>
            </div>
        </div>
    )
}

export default Moncompte