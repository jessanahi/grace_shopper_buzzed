const express = require('express');
const router = express.Router();

// GET /api/health
router.get('/health', async (req, res, next) => {
      res.send({
            message: 'Server is healthy',
      })
});

// ROUTER: /api/users
const usersRouter = require('./users');
router.use('/users', usersRouter);

// ROUTER: /api/products
const productsRouter = require('./products');
router.use('/products', productsRouter);

// ROUTER: /api/cart
const cartRouter = require('./cart');
router.use('/cart', cartRouter);

// ROUTER: /api/payment
const paymentRouter = require('./payment');
router.use('/payment', paymentRouter);

module.exports = router;
