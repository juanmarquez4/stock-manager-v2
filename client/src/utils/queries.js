import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
  query product {
    product {
      _id
      name
    }
  }
`;
