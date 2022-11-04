const  Sequelize  = require('sequelize');

const conection = new Sequelize("DHGEEK", "root", "1234567", {
    host: 'localhost',
    dialect: 'mysql'
});

conection.authenticate()
.then(function(){
  console.log("successful database connection")
}).catch(function(){
    console.log("Error: Database connection not successful!");
})

module.exports = conection;