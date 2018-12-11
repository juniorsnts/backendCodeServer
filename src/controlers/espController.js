const espBD = require('../bdMysql/espBD');
const botoesCentraisBD = require('../bdMysql/botoesBD');
const reqEsp = require('../models/reqEsp');

let id_central;
let modoForEsp;

module.exports = {
    async ligaDesliga(req, res){     
        id_central = await req.query.id;
        let data = await req.query.modo; // true ou false
        let ip = await req.ip;
        if(data == 'true'){ // ar ligado
            modoForEsp = 1;
            reqEsp(id_central, modoForEsp, res, req); // faz requisicao pro esp enviando os dados
        } else if(data == 'false'){ // ar desligado                 
            modoForEsp = 0;
            reqEsp(id_central, modoForEsp, res, req);
        } else {
            console.log('Error');
            res.json('Error');
        }
    },

    async botoesCentrais(req, res){
        await botoesCentraisBD.botoesBD(res);
    },

    async selecionaCentral(req, res){
        let id = await req.query.id;
        espBD.recuperarUltimoEstado(id, res);
    },

    async cadastroCentral(req, res){
        let nome_central = await req.body.nome_central;
        espBD.cadastroCentral(nome_central, res);
    }
    
    
}