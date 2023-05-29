import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
  query product {
    product {
      _id
      name
    }
  }
`;

export const QUERY_REDWINE = gql`
query redWine {
  redWine {
    wine
    winery
    location
    image
  }
}
`
