import react from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './singlecanari.css'
 
const Holder = ()=>{
    
    return(
        <div className="canari" style={{boxShadow:'none'}}>
            <div ><Skeleton height={180} width={230} /></div>
            <h2><Skeleton height={20} width={130} /></h2>
            <div>
            <p><Skeleton height={12} width={80} /><br/><Skeleton height={12} width={80} /> </p>
            <div style={{backgroundColor:'white'}}><Skeleton circle={true} height={35} width={35} /></div>
        </div>
        </div>
    )
}

export default Holder