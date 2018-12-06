const connection = require('../models/connectionMYSQL');
const temporizador = require('../models/temporizador');

module.exports = {
    consumo: function(res, modo){
        if(modo == 'true'){
            console.log(modo);
        } else {
            console.log(modo);            
        }   
    }
}