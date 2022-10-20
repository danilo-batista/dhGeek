const ProductModel = require("../models/product")

const productController = {
    mostrar: (request, response) => {
        ProductModel.getProducts();
        response.render('produto');
    },
};

function product(req, res) {
    const productList = ProductModel.getProducts();
    res.render("product", {productList});
}

module.exports = productController;