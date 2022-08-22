import { gql, useQuery } from "@apollo/client";


const GET_COUNTRY = gql`
    query Country($code: ID!){
         country (code: $code) {
            name
            capital
            currency
            emoji
            # continent
             languages {
                 name
             }
        }
    }
    
`

export const useCountry = (code) => {
    
    const {data, error, loading} = useQuery(GET_COUNTRY, {
        variables:  {
            code
        }
    })

    return {
        error,
        data,
        loading
    }
}  