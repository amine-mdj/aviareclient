import axios from 'axios'
import { useState,useEffect} from 'react'

const Oiseaux = ()=>{
    const [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8000/oiseaux").then((response)=>{
            setData(response.data)
        }).catch((err) => console.log(err, "it has an error"));
},[])
        const items = data.map( item =><tr>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td><img height="50px" width="50px" src={`data:image/png;base64,${item.b64}`}/></td>
        <td><button>Edit</button> <button>delete</button></td>
        </tr>
  )
    return(
        <div>
        <table id="customers">
  <tr>
    <th>description</th>
    <th>prix</th>
    <th>image</th>
    <th>edit/supr</th>

  </tr>
  {items}
  </table>
  </div>
    )
}

export default Oiseaux