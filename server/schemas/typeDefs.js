const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Product {
    _id: ID!
    name: String!
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
    product: [Product]

  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    createProduct(_id: String!, name: String!): Product
  }
`;

module.exports = typeDefs;
