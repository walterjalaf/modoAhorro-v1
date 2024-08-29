
const {Sequelize, Model, DataTypes, UUIDV4} = require("sequelize")

const sequelize = new Sequelize(
    "mibase", "admin", "12345678", {
    host: 'localhost',
    dialect: 'mysql' 
  });



class InventarioGeneral extends Model{}

InventarioGeneral.init({
    inventario_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true

    } ,
    fuente_de_energia: {
        type: DataTypes.STRING,
        allowNull: false // no se permite que sean datos nulos
    },
    equipos_principales: {
        type: DataTypes.STRING,
        allowNull: false // no se permite que sean datos nulos
    },
    distribucion_por_uso: {
        type: DataTypes.STRING,
        allowNull: false // no se permite que sean datos nulos
    },
    consumo_nominal_equipo: {
        type: DataTypes.FLOAT,
        allowNull: false // no se permite que sean datos nulos
    },
    factor_de_carga: {
        type: DataTypes.FLOAT,
        allowNull: false // no se permite que sean datos nulos
    },
    rendimiento: {
        type: DataTypes.FLOAT,
        allowNull: false // no se permite que sean datos nulos
    },
    horas_de_uso: {
        type: DataTypes.INTEGER,
        allowNull: false // no se permite que sean datos nulos
    },
    energia_secundaria_consumida: {
        type: DataTypes.FLOAT,
        allowNull: false // no se permite que sean datos nulos
    },
    energia_util_consumida: {
        type: DataTypes.FLOAT,
        allowNull: false // no se permite que sean datos nulos
    }


}, {
    sequelize,
    modelName: "inventario_general"
})

module.exports = InventarioGeneral