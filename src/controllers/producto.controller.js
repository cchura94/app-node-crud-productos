const Producto = require("./../models/producto");
const { QueryTypes } = require('sequelize');

const sequelize = require("./../config/conexion")

async function funListar(req, res){

    try {
        const productos = await Producto.findAll()
        /*
        const [results, metadata] = await sequelize.query("select * from productos", {
            type: QueryTypes.SELECT,
          });
        return res.json(results);
        */
        return res.json(productos);
        
    } catch (error) {
        console.log(error);
    }
}

async function funGuardar(req, res){

    try {
        // recibir datos (req.body)
        console.log(req.body);
        const datos = req.body;
        const nuevoProducto = await Producto.create(datos);
    
        return res.status(201).json({mensaje: "Producto registrado", producto: nuevoProducto});
        
    } catch (error) {
        return res.status(500).json({mensaje: "Error al registrar", error: error});
    }
}

async function funMostrar(req, res){
    console.log(req.params.id);
    const producto = await Producto.findByPk(req.params.id);

    if(!producto){
        return res.status(404).json({mensaje: "Producto no encontrado"});
    }
    return res.json(producto);
}

async function funModificar(req, res){
    const producto = await Producto.findByPk(req.params.id);

    if(!producto){
        return res.status(404).json({mensaje: "Producto no encontrado"});
    }
    await producto.update(req.body);

    return res.json({mensaje: "Producto actualizado", producto: producto});
}

async function funEliminar(req, res){
    const producto = await Producto.findByPk(req.params.id);

    if(!producto){
        return res.status(404).json({mensaje: "Producto no encontrado"});
    }
    await producto.destroy();
    return res.json({mensaje: "Producto eliminado"});


}

module.exports = {
    funListar,
    funGuardar,
    funMostrar,
    funModificar,
    funEliminar
}