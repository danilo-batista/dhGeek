const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();
router.get('/mostrar/:slug', productController.mostrar);
router.get('/', productController.buscar);

module.exports = router;