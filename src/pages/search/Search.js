import { useState } from "react"
import styles from './search.module.css'
import { useLazyQuery, gql } from "@apollo/client"


const GET_CONTRY_BY_CODE = gql`

query Country($code: ID!) {
  country(code: $code) {
    name
    currency
    code
    capital
    emoji
  }
}
 
`


export default function Search() {
    const [code, setCode] = useState('')
    const [searchCountry, {data, loading, error}] = useLazyQuery(GET_CONTRY_BY_CODE)

    if(loading) return <div>Loading...</div>
    if(error) return <div>Something went wrong ...</div>
    

  return (
    <div className={styles.searchField}>


        <input 
            className={styles.input}
            placeholder="Type in code i.e. SE ... " 
            onChange={e => setCode(e.target.value)}
            
        />

        <button className={styles.button} onClick={()=>{searchCountry(
          {
            variables: {code: code.toUpperCase()}
          }
        )}}>Search</button>

    
        <div>
          <h1>{data && data.country.name}</h1>
        </div>
        
        

    </div>
  )
}
