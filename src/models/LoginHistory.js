const Sequelize = require('sequelize');
const database = require('../config/db');

const Login = database.define('login_history', {
   login_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Login: {
        type: Sequelize.datetime,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
    
    },
}, {
    timestamps: false
});

//Criar uma tabela quando não existe nenhuma tabela
//[
    
   //Logar.sync();

//Verifique se há diferença na tabela, faça a alteração
//User.sync({alter: true})
module.exports = Login