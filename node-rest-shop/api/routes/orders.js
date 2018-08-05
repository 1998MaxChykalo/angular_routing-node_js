const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Orders were fetched"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Order was created"
    });
});

router.get('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Order ${orderId} was got`,
        orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Order ${orderId} was deleted`,
        orderId
    });
});

module.exports = router;