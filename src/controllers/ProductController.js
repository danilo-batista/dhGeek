const productModel = require("../models/product")

function searchByCategory(request, response) {
    let category = request.params.category;
    const productsList = productModel.getProducts();

    let productData = [];
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].category.toLowerCase() == category) {
            productData.push(productsList[i]);
        }
    }
    response.render('busca', { productData });
}

function searchById(request, response) {
    let id = request.params.id;
    const productsList = productModel.getProducts();

    let productData = [];
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].id == id) {
            productData.push(productsList[i]);
        }
    }
    response.render('produto', { productData });
}

function search(request, response) {
    const productData = productModel.getProducts();

    response.render('busca.ejs', { productData });
}
module.exports = { search, searchById, searchByCategory }