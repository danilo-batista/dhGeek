const Sequelize = require('sequelize');
const database = require('../config/db');

const Logar = database.define('login', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
}, {
    timestamps: false
});

//Criar uma tabela quando não existe nenhuma tabela
//[
    
   Logar.sync();

//Verifique se há diferença na tabela, faça a alteração
Login.sync({alter: true})
module.exports = Logar