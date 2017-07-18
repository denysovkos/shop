const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uiSchema = new Schema({
  categories:  Object
});

module.exports = uiSchema;


//CATEGORY STRUCTURE
// {
//   "categories": {
// 	"Женское":["Лифчики", "Трусы", "Прочее"],
// 	"Эротическое":["Красивое", "Не красивое", "Для жирных"],
// 	"Домашняя одежда": ["Халаты", "Не халаты"]
//   }
// }
