import axios from 'axios'
import Articlecard from '../components/articlecard'
import styles from './conseils.module.css'
import { useQuery } from 'react-query'

const fetchData = () => {
    return axios.get('http://localhost:8000/guest/articles')
  }

const Conseils = () =>{
    

    const {data} = useQuery('article',()=> fetchData() )
    
    const parser = new DOMParser();

    

    const withhtml = data?.data.map(item=>{
        const content = parser.parseFromString(item.content, "text/html");
        const image = content.getElementsByTagName('img')[0]
        
          return {
        _id : item._id,
        title: item.title,
        content: image.src,
        }
    })

    const result = withhtml?.map(item=><Articlecard id={item._id} title={item.title} image={item.content} />)


    return(<div>
        <div className={styles.hero}>
        
            <h1>Conseils Vétérinaires pour Oiseaux</h1>
         <p>Retrouvez toutes les informations utiles sur  l’acquisition un oiseaux dans nos <br/>
             articles : quel oiseaux choisir démarches, alimentation,visite chez le vétérinaire,<br/>
               stérilisation, bonnes pratiques à adopter afin de garantir son bien-<br/>
              être et sa bonne santé.
         </p>
        
        
        </div>
        <div className={styles.articlecard} >
            {result}
        </div>
        </div>)
}

export default Conseils