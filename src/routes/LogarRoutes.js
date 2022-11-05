const express = require('express');
const router = express.Router();
const controller = require('../controllers/LogarController');
const logarMiddleware = require('../middlewares/LogarMiddleware');

router.get('/', controller.renderLogarPage);
router.post(
  '/',
  logarMiddleware.fieldsValidation,
  logarMiddleware.validateUser,
  controller.authenticateUser
);

module.exports = router;