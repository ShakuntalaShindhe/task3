const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ProductId: Number,
  ProductName: String,
  CategoryName: String,
  CategoryId: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
