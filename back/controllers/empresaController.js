
//const {faker} = require("@faker-js/faker") --> solo se usa en las pruebas.

const { col } = require('sequelize');


const Empresa = require("../src/models/empresa.model"); // instancia del modelo de la tabla Colaborador.



/**
 * 
 * Lógica de negocio
 * 
 */
const crear_empresa = async function (req, res) {

    if ( req.user) {
        // Obtengo los datos enviados desde el formulario
    const data = req.body;
    console.log(data);
        // Si la tabla Colaborador no existe se crea.
    await Empresa.sync()
            
    let empresa = await Empresa.create({
        empresa_nombre: data.empresa_nombre,
        tamaño: data.tamaño,
        rubro: data.rubro,
        codigo: data.codigo,
        cuit: data.cuit,
        ciudad: data.ciudad,
        estado: data.estado
    })
    res.status(200).send({
        data: empresa
        
    });

                   
                    
         

}}


const listar_empresas = async function (req, res) {

    

    let empresas = await Empresa.findAll();
    res.status(200).send({
        data: empresas
    })
    console.log(empresas);
    
        
   
}

const eliminar_empresa  = async function (req, res) {

    let data = req.body;
    let id = req.params['id'];
    console.log({id});
    

    // let empresas = await Empresa.destroy({
    //     where: {
    //         empresa_id: data.empresa_id
    //     }
    // });
    // res.status(200).send({
    //     data: empresas
    // })
    // console.log(empresas);

    
}


module.exports = {

    crear_empresa,
    listar_empresas,
    eliminar_empresa

} 