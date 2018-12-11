const express = require('express');

const routes = express.Router();

const authController = require('./controlers/authController');

const espController = require('./controlers/espController');

routes.post('/login', authController.loginUser); // login usuario

routes.post('/cadastro', authController.cadastroUser); // cadastro usuario

routes.post('/cadastrar-central', espController.cadastroCentral); // cadastro de centrais

routes.get('/ligaDesliga', espController.ligaDesliga); // ligar ou desligar central

routes.get('/botoesCentrais', espController.botoesCentrais); // botoes com o nome das centrais

routes.get('/selecionaCentral', espController.selecionaCentral); // seleciona a central com seus dados

routes.get('/ultimoEstado', espController.ultimoEstado);

module.exports = routes;