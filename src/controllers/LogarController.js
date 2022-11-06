const jwt = require ("jsonwebtoken");
const { jwtkey } = require("../config/secrets");


function renderLogarPage(req, res) {
    return res.render("logar", { errors: [], data: {} });
  }
  
  function authenticateUser(req, res) {
    console.log(req.body);
    const token = jwt.sign({ email }, jwtkey, { expiresIn: "2h"})
    res.cookie("token", token)
    return res.redirect("/usuario/cadastrar");
  }
  
  module.exports = {
    renderLogarPage,
    authenticateUser,
  };