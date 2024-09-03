const express = require('express');

// Instancia del controlador -> puedo acceder a la lógica de la petición.
const colaboradorController = require('../controllers/colaboradorController');
const app = express.Router();

// llamó al token de autentificación
const auth =require('../middlewares/authenticate')

// Protocolo Http + path + lógica a realizar

/*
 *  POST
 */
app.post('/registro_colaborador_admin', auth.auth, colaboradorController.registro_colaborador_admin );
app.post('/login_admin', colaboradorController.login_admin)


/*
 *  GET
 */

app.get('/listar_colaboradores', auth.auth, colaboradorController.listar_colaboradores);
app.get('/obtener_datos_colaborador_admin/:id', auth.auth, colaboradorController.obtener_datos_colaborador_admin)

/**
 * UPDATE
 * 
 */

app.put('/cambiar_estado_colaborador_admin/:id', auth.auth, colaboradorController.cambiar_estado_colaborador_admin);
app.put('/actualizar_colaborador_admin/:id', auth.auth, colaboradorController.actualizar_colaborador_admin);

module.exports = app;