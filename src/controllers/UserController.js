const Usuario = require('../models/UserModels');

module.exports = {  
    async logar(req,res){
    res.render('logar');
},
async cadastrar(req, res) {
    res.render('cadastrar')
},
async create(req,res){
    const {nome, sobrenome, data_nascimento, email, senha} = req.body;
    let data = {};
    let user = await Usuario.findOne({email});
    if(!user){
        data = {nome, sobrenome, data_nascimento, email, senha};
        user = await Usuario.create(data);
                          
        return res.status(200).json(user);
    }else{
        return res.status(500).json(user);
    }
   },
};