const express = require('express');

// Instancia del controlador -> puedo acceder a la lógica de la petición.
const colaboradorController = require('../controllers/colaboradorController');

const app = express.Router();

// Protocolo Http + path + lógica a realizar

app.post('/registro_colaborador_admin', colaboradorController.registro_colaborador_admin );
app.post('/login_admin', colaboradorController.login_admin)



module.exports = app;