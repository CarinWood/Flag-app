import { useQuery, gql } from "@apollo/client";

const COUNTRY_LIST = gql`
 query {
    countries {
        name
        emoji
        capital
        currency
        code
    }
 }

`


export const useCountries = () => {
    const {error, data, loading } = useQuery(COUNTRY_LIST)

    return {
        error,
        data,
        loading
    }
}