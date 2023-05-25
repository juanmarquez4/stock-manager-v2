const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
  }

  type Query {
    product: [Product]
  }

  type Mutation {
    createProduct(_id: String!, name: String!): Product
  }
`;

module.exports = typeDefs;
