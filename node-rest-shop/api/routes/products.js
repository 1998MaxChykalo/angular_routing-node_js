const PRODUCTS = require('./../data/products');
const express = require('express');
const router = express.Router();
const Product = require('./../models/product');
const removeProduct = require('./../services/products').removeItem;

router.get('/', (req, res, next) => {
    res.status(200).json([
        ...PRODUCTS,
    ]);
    next();
});

router.post('/', (req, res, next) => {
    console.log(req.body.name);
    PRODUCTS.push(new Product(req.body));
    res.status(201).json({
        PRODUCTS,
    });
    next();
});

router.get('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    const product = PRODUCTS.find((product) => product.id == productId )
    res.status(200).json(product);
    next();
});

router.put('/', (req, res, next) => {
    console.log('loh');
    next();
})

router.patch('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    console.log(productId);
    const productIndex = PRODUCTS.findIndex((prod) => prod.id == productId);
    console.log(productId,PRODUCTS);    
    const editedProduct = new Product({
        id: req.body.id || PRODUCTS[productIndex].id,        
        productName: req.body.productName || PRODUCTS[productIndex].productName,
        price: req.body.price || PRODUCTS[productIndex].price,
    });
    PRODUCTS[productIndex] = editedProduct;
    res.status(200).json({
        newProduct: editedProduct
    });
    next();
});

router.delete('/:productId', (req, res, next) => {
    console.log();
    
    const productId = req.params.productId;
    removeProduct(productId, PRODUCTS);    
    res.status(200).json(PRODUCTS);
    next();
});



module.exports = router;