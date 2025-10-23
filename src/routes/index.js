const express = require("express");
const productoController = require("./../controllers/producto.controller")
const usuarioController = require("./../controllers/usuario.controller")

const Route = express.Router();

Route.get("/producto", productoController.funListar);
Route.post("/producto", productoController.funGuardar);
Route.get("/producto", productoController.funMostrar);
Route.put("/producto", productoController.funModificar);
Route.delete("/producto", productoController.funEliminar);

Route.get("/usuario", usuarioController.funListar);
Route.post("/usuario", usuarioController.funGuardar);
Route.get("/usuario", usuarioController.funMostrar);
Route.put("/usuario", usuarioController.funModificar);
Route.delete("/usuario", usuarioController.funEliminar);


module.exports = Route