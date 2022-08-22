 import { useCountry } from "../../hooks/useCountry"
 import { useParams } from 'react-router-dom'
 import styles from './singelCountry.module.css'

export const SingleCountry = () => {

     const { code } = useParams()
     const { data, error, loading } = useCountry(code)  

  return (
    <div className={styles.wrapper}>

      <div className={styles.head}>
          {data && <h1 className={styles.countryname}>{data.country.name}</h1>}
          {data && <div className={styles.flag}>{data.country.emoji}</div>}
      </div>

    </div>
  )
}
