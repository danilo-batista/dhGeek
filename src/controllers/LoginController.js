const jwt = require ("jsonwebtoken");
const connection = require("../config/db");
const { promisify } = require('util');


function renderLogarPage(req, res) {
    return res.render("login", { errors: [], data: {} });
  }
  
function authenticateUser(req, res) {
    const { email, password} = req.body;
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN})
    res.cookie("token", token)
    return res.redirect("/");
  }
  
function login (req, res, next) {
   const {email, password} = req.body
    // Verifique se o email e a senha existem
  if (!email || !password) {
    return res.status(400).render("login", {
      message: 'Por favor, forneça e-mail e senha'
    });
  }
   //Verifique se o usuário existe e a senha está correta
   connection.start.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    console.log(results);
    console.log(password);
    const isMatch = await bcrypt.compare(password, results[0].password);
    console.log(isMatch);
    if(!results || !isMatch ) {
      return res.status(401).render("login", {
        message: 'senha ou email incorretos'
      });
    } 
  });
};
// Apenas para páginas renderizadas, sem erros!
async function validateUser ( req, res, next) {
  console.log(req.cookies);
  if (req.cookies.jwt) { 
    try {
      //verificar token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      console.log("decoded");
      console.log(decoded);

      // Verifique se o usuário ainda existe
      connection.start.query('SELECT * FROM users WHERE id = ?', [decoded.id], (error, result) => {
        console.log(result)
        if(!result) {
          return next();
        }
        // HÁ UM USUÁRIO LOGADO
        req.user = result[0];
        // res.locals.user = result[0];
        console.log("next")
        return next();
      });
    } catch (err) {
      return next();
    }
  } else {
    next();
  }
};

 async function logout (req, res) {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).redirect("/");
};
  
  
  module.exports = {
    renderLogarPage,
    authenticateUser,
    login,
    validateUser,
    logout
  };