import Articlecard from '../components/articlecard'
import styles from './conseils.module.css'
import { useQuery } from 'react-query'
import axiosInstance from '../axiosInstance'

const fetchData = () => {
    return axiosInstance.get('guest/articles')
  }

const Conseils = () =>{
    

    const {data} = useQuery('article',()=> fetchData() )
    const parser = new DOMParser();

    

    const withhtml = data?.data.map(item=>{
        const content = parser.parseFromString(item.content, "text/html");
        const image = content.getElementsByTagName('img')[0]
        let shortdesc = ''
        const validepf = content.getElementsByTagName('p')
        let breakcheck = false;
        for(let i = 0; i < validepf.length; i++){
          for(let j = 0; j < validepf[i].childNodes.length; j++){
            if (validepf[i].childNodes[j].nodeType === Node.TEXT_NODE){ // or if (el[i].nodeType != 3)
            shortdesc = validepf[i].childNodes[j].nodeValue
            breakcheck = true    // to break from nested loop
            break;
            }
          }
          if(breakcheck) break; // to break from nested loop
        }
        
          return {
        _id : item._id,
        title: item.title,
        content: image.src,
        desc: shortdesc 
        }
    })

    const result = withhtml?.map(item=><Articlecard id={item._id} title={item.title} short={item.desc} image={item.content} />)


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