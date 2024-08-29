
//const {faker} = require("@faker-js/faker") --> solo se usa en las pruebas.

const { col } = require('sequelize');


const Inventario = require("../src/models/inventario.model"); // instancia del modelo de la tabla Colaborador.



/**
 * 
 * Lógica de negocio
 * 
 */
const crear_inventario = async function (req, res) {

    if ( req.user) {
        // Obtengo los datos enviados desde el formulario
    const data = req.body;
    console.log(data);
        // Si la tabla Colaborador no existe se crea.
    await Inventario.sync()
            
    let inventario = await Inventario.create({
        inventario_nombre: data.inventario_nombre,
        empresa: data.empresa,
        fecha_create_inventario: data.fecha_create_inventario
    })
    res.status(200).send({
        data: inventario
        
    });

                   
                    
         

}}


const listar_inventarios = async function (req, res) {

    

    let inventarios = await Inventario.findAll();
    res.status(200).send({
        data: inventarios
    })
    console.log(inventarios);
    
        
   
}

module.exports = {

    crear_inventario,
    listar_inventarios,

} 