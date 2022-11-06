const express = require("express");
const router = express.Router();
const controller = require("../controllers/UploadController");
const multerUpload = require("../config/multer");
const middleware = require ("../middlewares/LogarMiddleware")

router.get(
  "/cadastrar", 
  middleware.validateToken, 
  controller.showCreatePage
  );

router.post(
   "/cadastrar",
  middleware.validateToken,
  multerUpload.single("file"),
  controller.createProduct
);

router.get(
  "/:id/editar", 
  middleware.validateToken, 
  controller.showEditPage
  );

  router.put(
    "/:id/editar",
    middleware.validateToken, 
    multerUpload.single("file"), 
    controller.updateById);

router.delete(
  "/:id/editar", 
  middleware.validateToken, 
  controller.deleteById
  );

module.exports = router;