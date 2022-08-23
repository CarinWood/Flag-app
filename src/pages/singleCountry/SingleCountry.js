 import { useCountry } from "../../hooks/useCountry"
 import { useParams } from 'react-router-dom'
 import styles from './singelCountry.module.css'
 import { BsCashCoin, BsHash } from "react-icons/bs";
 import { RiMapPinLine } from "react-icons/ri";

export const SingleCountry = () => {

     const { code } = useParams()
     const { data, error, loading } = useCountry(code)  

     console.log({data})

  return (
    <div className={styles.wrapper}>

      <div className={styles.card}>
          {data && <h1 className={styles.countryname}>{data.country.name}</h1>}
          {data && <div className={styles.flag}>{data.country.emoji}</div>}

          <div className={styles.middle}>
          {data && <div className={styles.capital}><RiMapPinLine className={styles.icon}/> Capital: <span className={styles.black}>{data.country.capital}</span></div>}
          {data && <div className={styles.currency}><BsCashCoin className={styles.icon}/> Currency: <span className={styles.black}>{data.country.currency}</span></div>}
          {data && <div className={styles.currency}><BsHash className={styles.icon}/>Code: <span className={styles.black}>{data.country.code}</span></div>}
          </div>
          
          {data &&
          <ul className={styles.ul}>
            <h4 className={styles.laguageTitle}>Languages:</h4>
            {data.country.languages.map(item =>(
              <li className={styles.li}>{item.name}</li>
            ))}
          </ul>
          }

  
      </div>

    </div>
  )
}
