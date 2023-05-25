const { Tech, Matchup, Product } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    tech: async () => {
      // Get and return all documents from the collection
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
    product: async () => {
      return Product.find({});
    }
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    createMatchup: async (parent, args) => {
      // Create and return the Matchup 
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      // Find and update the matching vote using the destructured args
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        // Return the newly updated object instead of the original
        { new: true }
      );
      return vote;
    },
    createProduct: async (parent, args) => {
      const product = await Product.create(args);
      return product;
    },
  },
};

module.exports = resolvers;
