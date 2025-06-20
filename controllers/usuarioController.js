const usuarios = require('../data/usuarios');
//importa o array de usuarios

const saudacao = (req, res) => {
    res.json({ mensagem: 'Bem-Vindo à API de Exemplo' });
};

const criarUsuario = (req, res) => {
    const { nome, email } = req.body;

    //Validação simples
    if (!nome || !email) {
        return res.status(400).json({ erro: 'Nome e email são obrigatorios.'});
    }

    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
};

module.exports = {
    saudacao,
    criarUsuario,
};