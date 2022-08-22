 import { useCountry } from "../hooks/useCountry"
 import { useParams } from 'react-router-dom'

export const SingelCountry = () => {

     const { code } = useParams()
     const { data, error, loading } = useCountry(code)

     console.log({data})
  

  return (
    <div>
        <h1 className="hello">Hej</h1>
        {data && <h1>Country: {data.country.name}</h1>}
    </div>
  )
}
