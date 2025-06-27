const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

//rota de saudação
router.get('/saudacao', usuarioController.saudacao);

//rota para criar um novo usuario
router.post('/usuarios', usuarioController.criarUsuario);

router.get('/usuarios', usuarioController.listarUsuarios);

router.put('/usuarios/:id', usuarioController.atualizarUsuario);

router.delete('/usuarios/:id', usuarioController.deletarUsuario);

module.exports = router