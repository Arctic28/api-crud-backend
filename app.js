const express = require('express');
const app = express();

//middleware para interpretar JSON nas requisições
app.use(express.json());

const usuarioRoutes = require('./routes/usuarioRoutes');

app.use('/', usuarioRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});