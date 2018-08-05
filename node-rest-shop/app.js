const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('', (req, res, next) => {
    console.log(req);
    next();
});

  
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;