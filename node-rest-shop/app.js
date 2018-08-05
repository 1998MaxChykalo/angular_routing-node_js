const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const morgan = require('morgan');

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

// add logging 
app.use(morgan('dev'));
  
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// if we didn't find a fitting route, return not found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;