const fs = require('fs');

function ProductModel(path, category, picture1, picture2, picture3, picture4, name, discount, oldPrice, price, paymentConditions, description, quantity) {
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
  this.description = description;
  this.quantity = quantity;
}

function getProducts() {
  const productsList = JSON.parse(fs.readFileSync("./database/products.json", "utf-8"));

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
      product.description, 
      product.quantity
      )
    );
}

module.exports = {
  getProducts,
}