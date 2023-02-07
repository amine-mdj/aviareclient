import {useState} from 'react'
import axios from 'axios'
import styles from './addoiseaux.module.css'

const Addoiseaux = ()=>{
   const [oiseauximg, setOiseauximg] = useState()
   const [title, setTitle] = useState("")
   const [price, setPrice] = useState("")
    
    

    
   const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('oiseauximg', oiseauximg)
        formData.append('title', title)
        formData.append('price', price)
        axios.post("http://localhost:8000/oiseaux", {formData}, {
        }).then(res => {
            console.log(res)
        })
    }

   const onFileChange = (e) =>{
       setOiseauximg(e.target.files[0])
    }

   const ontitleChange = (e) =>{
        setTitle(e.target.value )
     }

   const  onpriceChange = (e) =>{
        setPrice( e.target.value )
     }

    return(
        <div className={styles.addoiso}>
            <h1>Ajouter un oiseaux</h1>
            <form onSubmit={onSubmit}>
            <label >image</label><br/>
            <input type="file" onChange={onFileChange} /><br/>
            <label >title</label><br/>
            <input type="text" value={title} onChange={ontitleChange} /><br/>
            <label >price</label><br/>
            <input type="text" value={price} onChange={onpriceChange} /><br/>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Addoiseaux