const Usuario = require("./../models/usuario");
const { QueryTypes } = require('sequelize');

const sequelize = require("./../config/conexion")

async function funListar(req, res){

    try {
        const usuarios = await Usuario.findAll()
       return res.json(usuarios)
        
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