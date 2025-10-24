const express = require("express");
const productoController = require("./../controllers/producto.controller")
const usuarioController = require("./../controllers/usuario.controller")

const Route = express.Router();

Route.get("/producto", productoController.funListar); // GET listar
Route.post("/producto", productoController.funGuardar); // POST guardar
Route.get("/producto/:id", productoController.funMostrar); // GET Mostrar
Route.put("/producto/:id", productoController.funModificar); // PUT modificar
Route.delete("/producto/:id", productoController.funEliminar); // DELETE eliminar

Route.get("/usuario", usuarioController.funListar);
Route.post("/usuario", usuarioController.funGuardar);
Route.get("/usuario/:id", usuarioController.funMostrar);
Route.put("/usuario/:id", usuarioController.funModificar);
Route.delete("/usuario/:id", usuarioController.funEliminar);


module.exports = Route