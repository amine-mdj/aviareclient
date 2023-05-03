import Cartitem from "../components/cartitem"
import { useState } from "react"
import './panier.css'
import { useNavigate } from "react-router-dom"
import {ToastContainer,toast} from 'react-toastify'
import {ClipLoader} from "react-spinners"
import 'react-toastify/dist/ReactToastify.css'
import axiosInstance from '../axiosInstance'

const Panier = ()=>{
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart'))) 
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const address = localStorage.getItem('address')
    const sum = cart.reduce((accumulator, object) => {
        let pricenet = object.price.split(":")
        let pricenet2 = pricenet[1].split(" ")
        let pricenet3 = parseFloat(pricenet2[1].replace(',','.'))
        return accumulator + pricenet3;
      }, 0);

      const notify = (message) =>{
        toast.success(message);
       } 

      const handleclick = () =>{
        if(address === null)
        {
           navigate('/login')
        }
        else{
            setLoading(true)
            const order = {
                address: address,
                numitems:cart.length,
                items:cart,
                amount:sum
            }
           axiosInstance.post('/orders', order ).then((response)=>{
            if(response.status === 200)
            {
                setLoading(false)
                notify(response.data.message)
            }
           })
        }
      }
    const items = cart.map((item, index)=><Cartitem image={item.img} title={item.title} price={item.price}/>)
return (<div className="maincart">
    
    <p><i class="fa-solid fa-arrow-left" style={{color: '#398a91'}} />Continuer mes achats</p>
    <h1>Mon Panier</h1>
    <ToastContainer />
    <div className="flexcart">
        <div className="cartitems">{items}</div>
        <div className="totalprice">
         <div className="line1">
            <p>{cart.length} atricles TTC</p>
            <p>{sum} euro</p>
         </div>
         <p className="offert">frais de livraison offert !</p>
         <p>Vous avez un code promo ?</p>
         <input type='text'  placeholder="Entrer votre code promo" />
         <div className="line4">
            <p>TOTAL TTC</p>
            <p>{sum} euro</p>
         </div>
         <button onClick={handleclick}>{loading ? <ClipLoader color='white' size={25} loading/> : 'VALIDER VOTRE PANIER'}</button>
        </div>
    </div>
</div>)
}

export default Panier