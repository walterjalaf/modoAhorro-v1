

// Inicializa express.
const express = require("express");
const app = express();

/**
 * Morgan sirve para ver las peticiones del http.
*/
const morgan = require("morgan");
app.use(morgan("dev"))




// Instancia de la ruta donde tengo mi http.
const colaborador_routes = require("../../routes/colaborador")
const empresa_routes = require('../../routes/empresa')
const inventario = require('../../routes/inventario')

/**
 * 
 *  Inicio de configuraciones del body y los headers... TODO: Investigar más a fondo cada linea.
 */

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.use(bodyParser.json({limit: '50mb', extended:true}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use(express.json())
/**
 * 
 *  Final de las configuraciones del body y los headers... TODO: Investigar más a fondo cada linea.
*/

/**
 *  Llamo a la instancia de la ruta donde tengo mi http -> el '/api' va despues del dominio/localhost y antes que la dirección del path
 */

app.use('/api', colaborador_routes);
app.use('/api', empresa_routes);
app.use('/api', inventario);



module.exports = app;