import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Link to="/search">Search Country</Link>
        <Link to="/"><h1 className={styles.countries}>List of Countries</h1></Link>
    </nav>
  )
}

export default Navbar