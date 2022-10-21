const ProductModel = require("../models/product")

const productController = {
    mostrar: (request, response) => {
        ProductModel.getProducts();
        response.render('produto');
    },
};

module.exports = productController;