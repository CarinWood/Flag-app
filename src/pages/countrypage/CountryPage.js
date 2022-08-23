import styles from './countrypage.module.css'
import { useCountries } from '../../hooks/useCountries' 
import { Link } from 'react-router-dom'



export const CountryPage = () => {
    
  const {error, loading, data } = useCountries()

    if(loading) return <div>Loading...</div>
    if(error) return <div>Something went wrong ...</div>

  return (
    <div className={styles.wrapper}>

        {data.countries.map(country => (
          <Link to={country.code} className={styles.card}>
            <div className={styles.name}>{country.name}<span className={styles.flag}>{country.emoji}</span></div>
          </Link>
        ))}
       
    </div>
  )
}
