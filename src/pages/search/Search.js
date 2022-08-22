import { useState } from "react"
import styles from './search.module.css'


export default function Search() {
    const [name, setName] = useState('')

  return (
    <div className={styles.searchField}>


        <input 
            className={styles.input}
            placeholder="Type in code i.e. SE ... " 
            onChange={e => setName(e.target.value)} 
        />

        <button className={styles.button}>Search</button>

    </div>
  )
}
