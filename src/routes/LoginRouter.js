const express = require('express');
const router = express.Router();
const controller = require('../controllers/LoginController');
const loginMiddleware = require('../middlewares/LoginMiddleware');

router.get(
  '/', 
  controller.renderLogarPage,
  );

router.post(
  '/',
  loginMiddleware.fieldsValidation,
  loginMiddleware.validateUser,
  controller.authenticateUser
);

router.get('/logout', controller.logout);

module.exports = router;