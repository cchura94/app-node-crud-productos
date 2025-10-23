const sequelize = require("./../config/conexion");

const { Sequelize, DataTypes } = require('sequelize');

const Usuario = sequelize.define(
  'usuarios',
  {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    
  },
  {
    // Other model options go here
  },
);


Usuario.sync()

module.exports = Usuario;