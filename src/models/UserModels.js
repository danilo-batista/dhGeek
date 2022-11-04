const Sequelize = require('sequelize');
const database = require('../config/db');

const Usuario = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    data_nascimento: {
        type: Sequelize.DATE,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
}, {
    timestamps: false
});

//Criar uma tabela quando não existe nenhuma tabela
//Usuario.sync();

//Verifique se há diferença na tabela, faça a alteração
//User.sync({alter: true})
module.exports = Usuario