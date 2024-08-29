const express = require('express');

// Instancia del controlador -> puedo acceder a la lógica de la petición.
const inventarioController = require('../controllers/inventarioController');
const app = express.Router();

// llamó al token de autentificación
const auth =require('../middlewares/authenticate')

// Protocolo Http + path + lógica a realizar

/*
 *  POST
 */
app.post('/crear_inventario', auth.auth, inventarioController.crear_inventario );



/*
 *  GET
 */

app.get('/listar_inventarios',  inventarioController.listar_inventarios);

module.exports = app;