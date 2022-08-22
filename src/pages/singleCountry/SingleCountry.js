 import { useCountry } from "../../hooks/useCountry"
 import { useParams } from 'react-router-dom'
 import styles from './singelCountry.module.css'

export const SingleCountry = () => {

     const { code } = useParams()
     const { data, error, loading } = useCountry(code)  

     console.log({data})

  return (
    <div className={styles.wrapper}>

      <div className={styles.card}>
          {data && <h1 className={styles.countryname}>{data.country.name}</h1>}
          {data && <div className={styles.flag}>{data.country.emoji}</div>}
          {data && <div className={styles.capital}>Capital: {data.country.capital}</div>}
          {data && <div className={styles.currency}>Currency: {data.country.currency}</div>}
          {data && <div className={styles.currency}>Code: {data.country.code}</div>}
          
          {data &&
          <ul>
            Languages:
            {data.country.languages.map(item =>(
              <li>{item.name}</li>
            ))}
          </ul>
          }

  
      </div>

    </div>
  )
}
