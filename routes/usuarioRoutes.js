const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

//rota de saudação
router.get('/saudacao', usuarioController.saudacao);

//rota para criar um novo usuario
router.post('/usuarios', usuarioController.criarUsuario);

module.exports = router