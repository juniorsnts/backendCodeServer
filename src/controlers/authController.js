const authBD = require('../bdMysql/authBD');

module.exports = {
    async loginUser(req, res){
        const email = await req.body.email;
        const senha = await req.body.senha;
        authBD.loginUser(res, email, senha);
    },
    async cadastroUser(req, res){
        const email = await req.body.email;
        const senha = await req.body.senha;   
        authBD.cadastroUser(res, email, senha);            
    }
}