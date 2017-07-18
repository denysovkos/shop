const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title:  String,
  description: String,
  price:   Number,
  category: {
    type: [String],
    required: true
  }
});

module.exports = productSchema;


//PRODUCT Schema
// {
//   "title": "3rd prod",
//     "description": "SOme description",
//     "price": 987,
//     "category": ["Женское", "Лифчики"]
// }
