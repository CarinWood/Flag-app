import { useState } from "react"
import { gql, useLazyQuery } from "@apollo/client"

const GET_FLAG_BY_NAME = gql`
    query GetFlagByName($name: String!){
        
    }
`

export default function Search() {
    const [name, setName] = useState('')

  return (
    <div>
        <input placeholder="Brazil ... " onChange={e => setName(e.target.value)} />
        <button>Search</button>

    </div>
  )
}
