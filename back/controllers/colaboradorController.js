
//const {faker} = require("@faker-js/faker") --> solo se usa en las pruebas.

const { col } = require('sequelize');
var jwt =require('../helpers/jwt'); // instancia para crear tokens

const Colaborador = require("../src/models/colaborador.model"); // instancia del modelo de la tabla Colaborador.

const bycrypt = require("bcrypt-nodejs"); // Instancia para encriptar datos.

/**
 * 
 * Lógica de negocio
 * 
 */
const registro_colaborador_admin = async function (req, res) {

    if ( req.user) {
        // Obtengo los datos enviados desde el formulario
    const data = req.body;
        
    // Intento crear un nuevo Colaborador y chequeo si la contraseña se puede encriptar y si el email ya existe.
    try {
        // Si la tabla Colaborador no existe se crea.
        await Colaborador.sync()
        
        // Realizo una consulta sobre si un email se encuentra en la tabla colaborador.
        const colaborador_email = await Colaborador.findAll({where: {email:data.email}})

        // Encripto la contraseña 
        bycrypt.hash('123456789', null, null, async function (err, hash) {
            
            if (err){

                res.status(200).send(
                    {data:undefined,
                    message: "No se pudo generar la contraseña."})

            }else{
                if(colaborador_email.length >= 1){
                    
                    res.status(200).send(
                        {data:undefined,
                        message: "El correo electrónico ya existe."})
                }else{
                    console.log("Creando colaborador");
                    
                    let colaborador = await Colaborador.create({
                        colaborador_nombre: data.colaborador_nombre,
                        estado: data.estado,
                        password: hash,
                        email: data.email
                    })
                    res.status(200).send({
                        data: colaborador
                        
                    });

                   
                    
                }
            }
        });
        
    } catch (err) {
        res.status(200).send({data: undefined, message:"Verifique los campos del formulario." + err})
    }
    } else {
        res.status(403).send({data: undefined, message:"No token."})

    }
}

const login_admin = async function (req, res) {

    // Obtengo los datos enviados desde el formulario
    let data = req.body;
    
    // Realizo una consulta sobre si un email se encuentra en la tabla colaborador.
    const colaborador_email = await Colaborador.findAll({where: {email:data.email}})

    // Verifico que el email se encuentra en la mi base de datos
    if (colaborador_email.length >=1){
        
        if (colaborador_email[0].estado){ // si el estado es true es porque tiene acceso a la plataforma
            bycrypt.compare(
                data.password,
                colaborador_email[0].password,
                async function (err, check) {
    
                if (check){
                    // Si el email y la contraseña son correctos se crea el token.
                    res.status(200).send({
                        data: colaborador_email[0],
                        token: jwt.createToken(colaborador_email[0])})
                }else{
    
                    res.status(200).send({
                        data:undefined,
                        message: "La contraseña no existe."})
                }
            })    
        }else {

            res.status(200).send({
                data:undefined,
                message: "Ya no tienes acceso al panel."})

        }
        
    } else {

        res.status(200).send({
            data:undefined,
            message: "El correo electrónico no existe."})
    }
}

const listar_colaboradores = async function (req, res) {
    if ( req.user) {
        let colaboradores = await Colaborador.findAll();
        res.status(200).send({
            data: colaboradores
        })
        
    }else {
        res.status(403).send({data: undefined, message:"No token."})

    }
}

module.exports = {

    registro_colaborador_admin,
    login_admin,
    listar_colaboradores
} 