const ProductModel = require("../models/UploadModels");

function showCreatePage(req, res) {
  return res.render("createProduct");
}

function createProduct(req, res) {
  // Se tiver req.file, vamos usar o req.file
  // Se não, vamos usar o picture
  let fileLocation = "";

  if (req.file) {
    fileLocation = `/uploads/${req.file.filename}`;
  } else {
    fileLocation = foto;
  }

  const { foto, preco, status,  descricao } = req.body;
  ProductModel.create(fileLocation, preco, status,  descricao);
  return res.redirect("/");
}

function showEditPage(req, res) {
  const { id } = req.params;
  const product = ProductModel.getById(id);
  return res.render("updateProduct", { product });
}

function updateById(req, res) {
  const { id } = req.params;
  const { foto, preco, status,  descricao } = req.body;
  // Se tiver req.file, vamos usar o req.file
  // Se não, vamos usar o picture
  let fileLocation = "";

  if (req.file) {
    fileLocation = `/uploads/${req.file.filename}`;
  } else {
    fileLocation = picture;
  }

  ProductModel.update(id, fileLocation, preco, status,  descricao);
  return res.redirect("/");
}

function deleteById(req, res) {
  const { id } = req.params;
  ProductModel.deleteById(id);
  return res.redirect("/");
}

module.exports = {
  showCreatePage,
  createProduct,
  showEditPage,
  updateById,
  deleteById,
};