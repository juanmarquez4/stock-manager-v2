const { Product, RedWine } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    product: async () => {
      return Product.find({});
    }, 
    redWine: async () => {
      return RedWine.find({});
    }
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    createProduct: async (parent, args) => {
      const product = await Product.create(args);
      return product;
    },
  },
};

module.exports = resolvers;
