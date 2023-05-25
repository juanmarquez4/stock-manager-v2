import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
 mutation createProduct($_id: String!, $name: String!) {
  createProduct(_id: $_id, name: $name) {
    _id
    name
  }
 }
`;
