const Products = require('../models/product');
const UISettings = require('../models/uiSettings');

exports.getCategories = (req, res) => {
  UISettings.find((err, categories) => {
    if (err) throw new Error('Error was happens on get settings-categories: ', err);
    
    res.send(categories)
  });
}

exports.updateCategories = (req, res) => {
  let Categories = UISettings({
      categories: req.body.categories
    });  

  Categories.save((err) => {
    if (err) throw new Error('Error while update settings-categories: ', err);
    
    res.send(Categories);
  });
}

exports.addProduct = function (req, res) {
  let newProduct = Products({
      title: req.body.title, 
      description: req.body.description, 
      price: req.body.price,
      category: req.body.category
    });

  newProduct.save(function (err) {
    if (err)throw new Error('Error while creating new product: ', err);
    
    res.send(newProduct);
  });
}

exports.showAllProducts = function (req, res) {
  Products.find(function (err, products) {
      res.send(products);
    });
}

exports.showProduct = function (req, res) {
  let id = req.params.id;

  Products.find({
    _id: id
  }, function (err, product) {
    if (!err) {
      res.send(product);
    } else {
      res.send('error');
    }
  });
}

exports.deleteProduct = (function (req, res) {
  let id = req.params.id;

  Products.findByIdAndRemove(id, function (err) {
    if (!err) {
      res.send('product deleted');
    } else {
      res.send('error');
    }
  });
});

exports.updateProduct = (function (req, res) {
  let id = req.params.id;
  let updatedProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  };

  Products.findByIdAndUpdate(id, updatedProduct, function (err, product) {
    if (!err) {
      res.send(product);
    } else {
      res.send('error');
    }
  });
});
