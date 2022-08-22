import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { IoGameControllerOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Link to="/search" className={styles.search}>Search Country<FcSearch className={styles.icon}/></Link>
        <Link to="/"><h1 className={styles.countries}>List of Countries</h1></Link>
        <Link to="/" className={styles.game}>Flag Game <IoGameControllerOutline className={styles.icon}/></Link>
    </nav>
  )
}

export default Navbar