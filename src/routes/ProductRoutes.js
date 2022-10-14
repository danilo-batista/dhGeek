const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();
router.get('/mostrar', productController.mostrar);

module.exports = router;