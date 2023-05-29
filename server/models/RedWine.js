const {Schema, model} = require('mongoose');

const redWineSchema = new Schema({
    winery: String,
    wine: String,
    rating: {average: String, rewiews: String},
    location: String,
    image: String,
});

const RedWine = model('RedWine', redWineSchema);

module.exports = RedWine;