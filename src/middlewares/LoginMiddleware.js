const {body, validationResult} = require('express-validator')
function validateUser(req, res, next) {
    if(!req.body.email){
        return res.send ("Voce precisar digitar o emil")
    }

    if (!req.body.password) {
        return res.send(" Voce precisa digitar a senha");
    }

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
   body("email")
   .isEmail()
   .withMessage("Voce precisa digitar o email"),
   body("password")
   .notEmpty()
   .withMessage("voce precisa digitar a senha").isLength ({min: 5})
   .withMessage("A senha precisa ter pelo menos 5 caracteres")
];



module.exports = {
    validateUser,
    fieldsValidation
}