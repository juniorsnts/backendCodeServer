const express = require('express');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next)=>{
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('./routers'));


server.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});