const espBD = require('../bdMysql/espBD');
const botoesCentraisBD = require('../bdMysql/botoesBD');
const formData = require('../models/tempo');
const reqEsp = require('../models/reqEsp');

let id_central;
let modoForEsp;

module.exports = {
    async ligaDesliga(req, res){        
        
        id_central = await req.query.id;
        let data = await req.query.modo; // true ou false
        let ip = await req.ip;
        if(data == 'true'){ // ar ligado
            data = 1;
            req.io.emit('status', true); //enviando via socket
            //espBD.consumoLigado(id_central, formData('data'), formData('hora'), ip, res); //enviar para log no bd
            modoForEsp = 1;
            reqEsp(id_central, modoForEsp); // faz requisicao pro esp enviando os dados
            res.json('Central Ligada');

        } else if(data == 'false'){ // ar desligado
            data = 0;
            req.io.emit('status', false);
            //espBD.consumoDesligado(id_central, formData('data'), formData('hora'), ip, res); //enviar para log no bd                     
            modoForEsp = 0;
            reqEsp(id_central, modoForEsp);
            res.json('Central Desligada');
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
        res.json("Central de id: "+id);
    },
    
    
}