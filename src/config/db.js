require('dotenv/config');
const Sequelize = require('sequelize');

const connection = new Sequelize (
  process.env.DB_NAME, 
  process.env.DB_USERNAME, 
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,
  JWT_EXPIRES_IN:  process.env.JWT_EXPIRES_IN,
  dialect: `${process.env.DB_CONNECTION}`
});

  connection.authenticate()
  .then(function () {
    console.log("successful database connection")
  }).catch(function () {
    console.log("Error: Database connection not successful!");
  })

module.exports = connection;