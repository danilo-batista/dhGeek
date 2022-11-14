const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connection = require("../config/db");
const User = require('../models/UserModels');

module.exports = {  
    async login(req,res){
    res.render('login');
},
async register(req, res) {
    res.render('register');
},
async register(req,res){
  const {firstName, lastName, date, email, password, passwordConfirm } = req.body;
  let data = {};
  let user = await User.findOne({email});
  if(!user){
      data = {firstName, lastName, date, email, password, passwordConfirm };
      user = await User.create(data);
                        
      return res.status(200).json(user);
  }else{
      return res.status(500).json(user);
  }
 },
register(req,res){
    console.log(req.body)
    const { firstName, lastName, date, email, password, passwordConfirm } = req.body;
    
    //Verifique se o usuário existe && a senha está correta
    connection.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) =>{
      if(error) {
          console.log(error);
      }

      if(results.length > 0) {
          return res.render('register', {
              message: 'Esse e-mail já está em uso'
          })
      } else if( password !== passwordConfirm) {
          return res.render('register', {
              message: 'As senhas não coincidem'
          })
      }
    
    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);

    connection.query('INSERT INTO users SET ?', {name: firstName, name: lastName, name: date, email: email, password: hashedPassword }, (error, results) => {
     if(error) {
      console.log(error);
     } else {
        connection.start.query('SELECT id FROM users WHERE email = ?', [email], (error, result) => {
            const id = result[0].id;
            console.log(id);
            const token = jwt.sign({ id }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN
            });
  
            const cookieOptions = {
              expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES_IN
              ),
              httpOnly: true
            };
            res.cookie('jwt', token, cookieOptions);
  
            res.status(201).redirect("/");
          });
        }
      });
    });
}
}