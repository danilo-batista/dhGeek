const ProductModel = require("../models/product")

function mostrar (request, response) {
    const productsList = ProductModel.getProducts();
    response.render('produto', {productsList});
}
module.exports = {mostrar}