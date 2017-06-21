/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

const bodyParser = require('body-parser');
const api = require('./db/controllers/api');
const productSchema = require('./db/schema/product');
const Products = require('./db/models/product');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MONGO CONNECTED');
});



if (isDeveloping) {
  app.get('/products', api.showAllProducts);
  app.get('/products/:id', api.showProduct);
  app.post('/products', api.addProduct);
  app.put('/products/:id', api.updateProduct);
  app.delete('/products/:id', api.deleteProduct);

  app.get('/ui/categories', api.getCategories);
  app.post('/ui/categories', api.updateCategories);

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));

  app.get('/products', api.showAllProducts);
  app.get('/products/:id', api.showProduct);
  app.post('/products', api.addProduct);
  app.put('/products/:id', api.updateProduct);
  app.delete('/products/:id', api.deleteProduct);

  app.get('/ui/categories', api.getCategories);
  app.post('/ui/categories', api.updateCategories);


  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, 'localhost', function onStart(error) {
  if (error) {
    console.log(error);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
