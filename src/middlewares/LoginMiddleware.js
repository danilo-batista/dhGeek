const {body, validationResult} = require('express-validator');
const jwt = require("jsonwebtoken");



function validateUser(req, res, next) {
  console.log(req.cookies);
   // if(!req.body.email){
     //   return res.send ("Você deve inserir o e-mail")
   // }

    //if(!req.body.email.includes("@")){
    //  return res.send("você deve digitar o e-mail corretamente")
   // }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("login", {
        errors: errors.array(),
        data: {
          email: req.body.email,
          password: req.body.password,
        },
      });
    }
  
    next();
  }

const fieldsValidation = [
  body("email").isEmail().withMessage("Você precisa digitar o email"),
   body("password")
   .notEmpty()
   .withMessage("Você deve digitar a senha").isLength ({min: 5})
   .withMessage("A senha deve ter pelo menos 5 caracteres"),
];

function validateToken(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
  } catch (error) {
    res.cookies("token", " ");
    return res.redirect("/login")
  }

  next();
};


module.exports = {
    validateUser,
    fieldsValidation,
    validateToken
};