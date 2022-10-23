const productModel = require("../models/product");

function index(request, response) {
    const productsList = productModel.getProducts();
    response.render('index', { productsList });
}
module.exports = { index }