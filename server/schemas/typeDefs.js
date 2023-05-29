const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
  }

  type RedWine {
    winery: String
    wine: String
    rating: [String]
    location: String
    image: String
  }

  type Query {
    product: [Product]
    redWine: [RedWine]
  }

  type Mutation {
    createProduct(_id: String!, name: String!): Product
  }
`;

module.exports = typeDefs;
