
const {Sequelize, Model, DataTypes, UUIDV4} = require("sequelize")

const sequelize = new Sequelize(
    "mibase", "admin", "12345678", {
    host: 'localhost',
    dialect: 'mysql' 
  });



class Colaborador extends Model{}

Colaborador.init({
    colaborador_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true

    } ,
    colaborador_nombre: {
        type: DataTypes.STRING,
        allowNull: false // no se permite que sean datos nulos
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "colaborador"
})

module.exports = Colaborador