const userController = {
    logar: (request, response) => {
        response.render('logar');
    },
    cadastrar: (resquest, response) => {
        response.render('cadastrar');
    }
};

module.exports = userController;