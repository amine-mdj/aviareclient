import { useLocation } from "react-router-dom"
import './productdetail.css'
import { useEffect, useState } from "react"


const Productdetail = ()=>{
    const {state} = useLocation()
    let initialstate = localStorage.getItem('cart')
    if (initialstate === null){
        initialstate = []
        localStorage.setItem('cart', [])
    }
    const [cart, setCart] = useState(initialstate)
    
    const myArray = state.price.split(":")

    let magnifying_area =  document.getElementById("magnifying_area");
    let magnifying_img =  document.getElementById("magnifying_img");

const handlemove = (event) =>{
    let clientX = event.clientX - magnifying_area.offsetLeft
	let clientY = event.clientY - magnifying_area.offsetTop
	 
	let mWidth = magnifying_area.offsetWidth
	let mHeight = magnifying_area.offsetHeight
	clientX = clientX / mWidth * 100
	clientY = clientY / mHeight * 100

	//magnifying_img.style.transform = 'translate(-50%,-50%) scale(2)'
	magnifying_img.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(2)'
}

const handleleave = () =>{
    magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)'
}

const handlecart = ()=>{
    setCart(oldArray=>[...oldArray, {img:state.b64,title:state.title,price:state.price}])
    }

useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
    },[cart])


return (
<div className='contain'>
    <div className="imagecontain">
    <figure id="magnifying_area" onMouseMove={(event)=>handlemove(event)} onMouseLeave={handleleave}>
        <img id="magnifying_img" src={`data:image/png;base64,${state.b64}`} alt='product image'/>
        </figure>
        </div>
    <div className="detailscontain">
        <h1>{state.title}</h1>
        <div className="innercontain">
            <div className="pricecontain">
                <p>{myArray[0]}</p>
                <p>{myArray[1]}</p>
            </div>
            <div className="livraisoncontain">
                <p>Livraison offerte dès 45,00 € d'achat (*)</p>
                <p>Livraison express le 02/05/2023 <br/> si vous commandez dans les 16 h et 18 min</p>
            </div>
            <button onClick={handlecart}>AJOUTER AU PANIER</button>
        </div>
        <div className="descriptioncontain">
            <p>Description Produit</p>
            <p>L'aliment Orijen Original convient à tous les chiens adultes quelle que soit leur race.
                 Des teckels aux danois, tous les chiens sont des carnivores à tendance omnivore et ont
                  besoin d’un régime varié et riche en viandes, composé de petites quantités de fruits,
                   de légumes et d’herbes. Les croquettes Orijen Original contiennent le même mélange varié,
                    nutritif et équilibré que votre chien mangerait dans son milieu naturel et lui garantissent
                     une santé optimale</p>
        </div>
    </div>
     </div>)
}

export default Productdetail