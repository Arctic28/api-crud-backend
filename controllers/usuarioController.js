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


const listarUsuarios = (req, res) => {
    res.json(usuarios); // retorna a array inteira
};

const atualizarUsuario = (req, res) => {
    const { id } = req.params; //ID vindo da URL

    const { nome, email } = req.body;

    const usuario = usuarios.find((u) => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ erro: 'Usuario não encontrado.'});
    }

   if (nome) usuario.nome = nome;
   if (email) usuario.email = email;

   res.json(usuario);
};

const deletarUsuario = (req, res) => {
    const { id } = req.params;
    const indice = usuarios.findIndex((u) => u.id === parseInt(id));

    if (indice === -1) {
        return res.status(404).json({ erro: 'Usuario não encontrado.' });
    }

    usuarios.splice(indice, 1);

    res.json({ mensagem: 'Usuario removido com sucesso.' });
};

module.exports = {
    saudacao,
    criarUsuario,
    listarUsuarios,
    atualizarUsuario,
    deletarUsuario
};