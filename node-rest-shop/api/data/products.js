const guid = require('../helpers/guid');
const Product = require('./../models/product');

const PRODUCTS = [
    new Product({ productName: 'Water', price: 10 }),
    new Product({ productName: 'Hamburger', price: 80 }),
    new Product({ productName: 'Milk', price: 30 }),
    new Product({ productName: 'Cucumber', price: 10 }),
    new Product({ productName: 'Oil', price: 30 }),
    new Product({ productName: 'Chips', price: 30 }),
    new Product({ productName: 'Cheese', price: 200 }),
    new Product({ productName: 'Cornflakes', price: 25 }),
];

module.exports = PRODUCTS;