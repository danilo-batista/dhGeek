const fs = require("fs");

function ImgProduct (foto, preco, status, descricao) {
    this.foto = foto;
    this.preco = preco;
    this.status = status;
    this.descricao = descricao;
}

function getAll() {
  const ImgProductList = JSON.parse(
    fs.readFileSync("config/ImgProducts.json", "utf-8")
  );
  return ImgProductList.map(
    (imgProduct) =>
      new ImgProduct(
        imgProduct.foto,
        imgProduct.preco,
        imgProduct.status,
        imgProduct.descricao
      )
  );
}

function create(foto, preco, status, descricao) {
  const newImgProduct = new ImgProduct(foto, preco, status, descricao);
  const  ImgProductList = getAll();
  ImgProductList.push(newImgProduct);
  fs.writeFileSync("config/ImgProducts.json", JSON.stringify( ImgProductList));
}

function getById(id) {
  const  ImgProductList = getAll();
  return  ImgProductList[id];
}

function update(id, foto, preco, status, descricao) {
  // Buscar todos os imóveis
  const  ImgProductList = getAll();
  // Alterar o imóvel que possui o index = id
  const imgProduct=  ImgProductList[id];
  imgProduct.foto = foto;
  imgProduct.preco = preco;
  imgProduct.status = status;
  imgProduct.descricao = descricao;
  // Salvar os dados alterados no arquivo do banco de dados
  fs.writeFileSync("config/ImgProducts.json", JSON.stringify(ImgProductList));
}

function deleteById(id) {
  // Buscar todos os imóveis
  // Remover o imóvel do index = id
  // Salvar a lista novamente
  const ImgProductList = getAll();
  ImgProductList.splice(id, 1);
  fs.writeFileSync("config/ImgProducts.json", JSON.stringify(ImgProductList));
}

module.exports = {
  getAll,
  create,
  getById,
  update,
  deleteById,
};