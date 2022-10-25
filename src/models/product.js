const fs = require('fs');
const path = require('path');

function Product(
  id, slug, title, department, category, productionBanner, name, picture1, picture2, picture3,
  picture4, description, manufacturer, disneyBrand, character, material,
  anyArticulation, weight, width, height, depth, price, discount, promotionalPrice,
  paymentsConditions, paymentsValues, paymentsFee, paymentsShipping) {
  this.id = id;
  this.slug = slug;
  this.title = title;
  this.department = department;
  this.category = category;
  this.productionBanner = productionBanner;
  this.name = name;
  this.picture1 = picture1;
  this.picture2 = picture2;
  this.picture3 = picture3;
  this.picture4 = picture4;
  this.description = description;
  this.manufacturer = manufacturer;
  this.disneyBrand = disneyBrand;
  this.character = character;
  this.material = material;
  this.anyArticulation = anyArticulation;
  this.weight = weight;
  this.width = width;
  this.height = height;
  this.depth = depth;
  this.price = price;
  this.discount = discount;
  this.promotionalPrice = promotionalPrice;
  this.paymentsConditions = paymentsConditions;
  this.paymentsValues = paymentsValues;
  this.paymentsFee = paymentsFee;
  this.paymentsShipping = paymentsShipping
}

function getProducts() {
  const tempPath = path.join(__dirname, "../databases/products.json")
  const productsList = JSON.parse(fs.readFileSync(tempPath, "utf-8"));
  return productsList.map
    (product =>
      new Product(
        product.id,
        product.slug,
        product.title,
        product.department,
        product.category,
        product.productionBanner,
        product.name,
        product.picture1,
        product.picture2,
        product.picture3,
        product.picture4,
        product.description,
        product.manufacturer,
        product.disneyBrand,
        product.character,
        product.material,
        product.anyArticulation,
        product.weight,
        product.width,
        product.height,
        product.depth,
        product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        product.discount,
        product.promotionalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        product.paymentsConditions,
        product.paymentsValues.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        product.paymentsFee,
        product.paymentsShipping.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      )
    );
}
module.exports = { getProducts };