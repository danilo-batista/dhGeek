const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/logar', userController.logar);
router.get('/cadastrar', userController.cadastrar);

module.exports = router;