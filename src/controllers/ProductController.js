const productModel = require("../models/product")

function mostrar(request, response) {
    const productsList = productModel.getProducts();
    response.render('produto', { productsList });
}

function buscar(request, response) {
    const productsList = productModel.getProducts();
    response.render('busca.ejs', { productsList });
}
module.exports = { mostrar, buscar }