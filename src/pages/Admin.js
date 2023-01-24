import styles from './admin.module.css'
import {Link, Outlet} from 'react-router-dom'

const Admin = () =>{
   return (<div className={styles.parsidenav}>
    <div className={styles.sidenav}>
       <ul>
        <li><Link className={styles.linkk} to='utilisateurs'>Utilisateurs</Link></li>
        <li><Link className={styles.linkk} to='oiseaux'>oiseaux</Link></li>
        </ul>
    </div>
    <Outlet/>
   </div>)
}

export default Admin