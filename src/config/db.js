require('dotenv/config');
const Sequelize = require('sequelize');

const conection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: `${process.env.DB_CONNECTION}`
});

conection.authenticate()
  .then(function () {
    console.log("successful database connection")
  }).catch(function () {
    console.log("Error: Database connection not successful!");
  })

module.exports = conection;