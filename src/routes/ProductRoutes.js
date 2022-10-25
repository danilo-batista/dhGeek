const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();
router.get('/', productController.buscar);
router.get('/mostrar/:id', productController.mostrar);

module.exports = router;