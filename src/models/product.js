const fs = require('fs');
const path = require("path");

function ProductModel(category, path, picture1, picture2, picture3, picture4, name, discount, oldPrice, price, paymentConditions, descriptionTitle, description, quantity) {
  this.category = category
  this.path = path
  this.picture1 = picture1;
  this.picture2 = picture2;
  this.picture3 = picture3;
  this.picture4 = picture4;
  this.name = name;
  this.discount = discount;
  this.oldPrice = oldPrice;
  this.price = price;
  this.paymentConditions = paymentConditions;
  this.descriptionTitle = descriptionTitle;
  this.description = description;
  this.quantity = quantity;
}

function getProducts() {
  const tempPath = path.join(__dirname, "../database/products.json")
  const productsList = JSON.parse(fs.readFileSync(tempPath, "utf-8"));
  return productsList.map
  (product => 
    new ProductModel(
      product.category,
      product.path,
      product.picture1,
      product.picture2,
      product.picture3,
      product.picture4,
      product.name,
      product.discount, 
      product.oldPrice,
      product.price,
      product.paymentConditions,
      product.descriptionTitle,
      product.description,
      product.quantity
      )
    );
}

module.exports = {
  getProducts,
}