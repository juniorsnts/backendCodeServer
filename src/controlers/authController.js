const authBD = require('../bdMysql/authBD');
const cripto = require('../models/criptografia');

module.exports = {
    async loginUser(req, res){
        const email = await req.body.email;
        const senha = await cripto(req.body.senha);
        authBD.loginUser(res, email, senha);
    },
    async cadastroUser(req, res){
        const email = await req.body.email;
        const senha = await cripto(req.body.senha);   
        authBD.cadastroUser(res, email, senha);            
    }
}