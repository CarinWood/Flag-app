import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <p>Search Country</p>
        <h1 className={styles.countries}>List of Countries</h1>
    </nav>
  )
}

export default Navbar