import { gql } from "apollo-angular";

const GET_CONTINENTS = gql`
query {
  continents{
    name
  }
}
`
const GET_COUNTRIES = gql`
query {

  continents{
    name
    countries{
      name,
      code
      languages{
        name
      }

      capital,
      subdivisions{
        name
      },
      currencies
      continent{
        name
      }


    }
  }
}
`



export {GET_CONTINENTS,GET_COUNTRIES}
