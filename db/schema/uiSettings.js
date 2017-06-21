const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uiSchema = new Schema({
  categories:  Object
});

module.exports = uiSchema;
