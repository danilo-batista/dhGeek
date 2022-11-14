const express = require('express');
const User = require('../controllers/userController');

const router = express.Router();

router.get('/login', User.login);
router.get('/register', User.register);

router.post('/register', User.register);

module.exports = router;