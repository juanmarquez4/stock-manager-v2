const db = require('../config/connection');
const { Product  } = require('../models');

const productData = require ('./productData.json');

db.once('open', async () => {
  // clean database
  await ( Product.deleteMany({})) ;

  // bulk create each model

  const products = await Product.insertMany(productData);

  console.log('Products seeded!');
  process.exit(0);
});
