const productModel = require("../models/product")

function mostrar(request, response) {
    const productsList = productModel.getProducts();
    response.render('produto', { productsList });
}
module.exports = { mostrar }