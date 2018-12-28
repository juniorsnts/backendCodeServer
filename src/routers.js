const express = require('express');

const routes = express.Router();

const authController = require('./controlers/authController');

const espController = require('./controlers/espController');


routes.post('/login', authController.loginUser); // login usuario

routes.post('/cadastro', authController.cadastroUser); // cadastro usuario

routes.post('/cadastrar-central', authController.verificaJWT, espController.cadastroCentral); // cadastro de centrais

routes.get('/ligaDesliga', authController.verificaJWT, espController.ligaDesliga); // ligar ou desligar central

routes.get('/botoesCentrais', authController.verificaJWT, espController.botoesCentrais); // botoes com o nome das centrais

routes.get('/selecionaCentral', authController.verificaJWT, espController.selecionaCentral); // seleciona a central com seus dados

routes.get('/ultimoEstado', authController.verificaJWT, espController.ultimoEstado);

routes.get('/verificaLogin', authController.verificaJWT, authController.loginAutomatico);

module.exports = routes;