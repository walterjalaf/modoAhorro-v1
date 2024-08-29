
const {Sequelize, Model, DataTypes, UUIDV4} = require("sequelize")

const sequelize = new Sequelize(
    "mibase", "admin", "12345678", {
    host: 'localhost',
    dialect: 'mysql' 
  });



class Inventario extends Model{}

Inventario.init({
    inventario_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true

    } ,
    inventario_nombre: {
        type: DataTypes.STRING,
        allowNull: false // no se permite que sean datos nulos
    },
    
    empresa: {
        type: DataTypes.STRING,
        allowNull:false
    },
    fecha_create_inventario: {
        type: DataTypes.STRING,
        allowNull:false
    }

}, {
    sequelize,
    modelName: "inventario"
})

module.exports = Inventario