const mongoose = require('mongoose');
const getRandomArbitrary = require('../services/shared');


const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

// class Product {
//     constructor({ productName, productCode, category, releaseDate, price, description, starRating, imageUrl, tags }) {
//         this.id = guid();
//         this.productName = productName || '';
//         this.productCode = productCode || '';
//         this.category = category || '';
//         this.tags = tags || ['Food', 'Health'];
//         this.releaseDate = releaseDate || '';
//         this.price = price || 0;
//         this.description = description || '';
//         this.starRating = starRating || getRandomArbitrary(0, 5);
//         this.imageUrl = imageUrl || `https://picsum.photos/200/100/?image=${this.id}`;
//     }
// }
// class Product {

//     constructor({ name, sku, price }) {
//         this.name = name;
//         this.sku = sku || guid();
//         this.price = price;
//     }
// }

module.exports = mongoose.model('Product', productSchema);