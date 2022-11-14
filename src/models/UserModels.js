const Sequelize = require('sequelize');
const database = require('../config/db');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    Date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false
});

//Criar uma tabela quando não existe nenhuma tabela
    
   //Usuario.sync();

//Verifique se há diferença na tabela, faça a alteração
//User.sync({alter: true})
module.exports = User