const espBD = require('../bdMysql/espBD');
const botoesCentraisBD = require('../bdMysql/botoesBD');

let id_central;
let modoForEsp;

module.exports = {
    async ligaDesliga(req, res){
        id_central = await req.query.id;
        let data = await req.query.modo; // true ou false
        if(data == 'true'){ // ar ligado
            data = 1;
            req.io.emit('status', true); //enviando via socket
            res.json({
                id: id_central,
                modo: data
            });
            modoForEsp = 1;

        } else if(data == 'false'){ // ar desligado
            data = 0;
            req.io.emit('status', false);
            res.json({
                id: id_central,
                modo: data
            });            
            modoForEsp = 0;

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
    
    async ligarCentral(req, res){
        res.json({
            id_central: id_central,
            modo: modoForEsp
        });                        
    }

}