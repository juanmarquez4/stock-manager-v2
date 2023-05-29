const db = require('../config/connection');
const { Product, RedWine } = require('../models');

const productData = require ('./productData.json');
const redWineData = require ('./redWine.json')

db.once('open', async () => {
  // clean database
  await ( Product.deleteMany({})) ;
  await ( RedWine.deleteMany({}));

  // bulk create each model
  const products = await Product.insertMany(productData);
  const redWine = await RedWine.insertMany(redWineData);

  console.log('seeded!');
  process.exit(0);
});


const newData = redWineData
console.log(newData)
