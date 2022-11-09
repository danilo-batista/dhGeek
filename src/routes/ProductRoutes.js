const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();
router.get('/', productController.search);
router.get('/:id', productController.searchById);
router.get('/todos/:category', productController.searchByCategory);

module.exports = router;