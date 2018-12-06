const express = require('express');

const routes = express.Router();

const authController = require('./controlers/authController');

const espController = require('./controlers/espController');

routes.post('/login', authController.loginUser);

routes.post('/cadastro', authController.cadastroUser);

routes.get('/ligaDesliga', espController.ligaDesliga);

routes.get('/botoesCentrais', espController.botoesCentrais);

routes.get('/selecionaCentral', espController.selecionaCentral);

routes.post('/ligar', espController.ligarCentral);

module.exports = routes;