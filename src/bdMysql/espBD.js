const connection = require('../models/connectionMYSQL');
const sqlInsertLigado = "insert into log_ligado values(default, ?, ?, ?, ?)";
const sqlInsertDesigado = "insert into log_desligado values(default, ?, ?, ?, ?)";

module.exports = {
    consumoLigado: function(id, data_ligado, horario_ligado, ip, res){
        connection.query(sqlInsertLigado, [id, data_ligado, horario_ligado, ip], (err, results)=>{
            if(err){
                res.json(err);
            } else {
                res.json(true);
            }
        });
    },

    consumoDesligado: function(id, data_desligado, horario_desligado, ip, res){
        connection.query(sqlInsertDesigado, [id, data_desligado, horario_desligado, ip], (err, results)=>{
            if(err){
                res.json(err);
            } else {
                res.json(false);
            }
        });
    },
}