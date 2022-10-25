const productModel = require("../models/product")

function mostrar(request, response) {
    let id = request.params.id;
    const productsList = productModel.getProducts();

    let productDetails = [];
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].id == id) {
            productDetails.push(productsList[i]);
        }
    }
    response.render('produto', { productDetails });
}

function buscar(request, response) {
    const productsList = productModel.getProducts();
    response.render('busca.ejs', { productsList });
}
module.exports = { mostrar, buscar }