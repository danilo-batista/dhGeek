const express = require('express');
const Usuario = require('../controllers/userController');

const router = express.Router();

router.get('/logar', Usuario.logar);
router.get('/cadastrar', Usuario.cadastrar);

router.post('/usuarios', Usuario.create);

module.exports = router;