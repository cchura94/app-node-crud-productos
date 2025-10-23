const Producto = require("./../models/producto");
const { QueryTypes } = require('sequelize');

const sequelize = require("./../config/conexion")

async function funListar(req, res){

    try {
        // const productos = await Producto.findAll()
        const [results, metadata] = await sequelize.query("select * from productos", {
            type: QueryTypes.SELECT,
          });
        return res.json(results);
        
    } catch (error) {
        console.log(error);
    }
}

function funGuardar(req, res){

}

function funMostrar(req, res){

}

function funModificar(req, res){

}

function funEliminar(req, res){

}

module.exports = {
    funListar,
    funGuardar,
    funMostrar,
    funModificar,
    funEliminar
}