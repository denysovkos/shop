const mongoose = require('mongoose');

const productSchema = require('../schema/product');

const Products = mongoose.model('Product', productSchema);

module.exports = Products;
