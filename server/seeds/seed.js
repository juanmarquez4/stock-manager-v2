const db = require('../config/connection');
const { Tech } = require('../models');

const techData = require('./techData.json');

db.once('open', async () => {
  // clean database
  await Tech.deleteMany({});

  // bulk create each model
  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
