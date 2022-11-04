const jwt = require ("jsonwebtoken");
const { jwtkey } = require("../config/secrets");


function renderLoginPage(req, res) {
    return res.render("login", { errors: [], data: {} });
  }
  
  function authenticateUser(req, res) {
    console.log(req.body);
    const token = jwt.sign({ email }, jwtkey)
    res.cookie("token", token)
    return res.redirect("/");
  }
  
  module.exports = {
    renderLoginPage,
    authenticateUser,
  };