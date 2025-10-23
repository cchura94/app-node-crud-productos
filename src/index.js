// importar (modulos de terceros) express
const express = require("express");
const rutas = require("./routes/index");

// variables
const PORT=3000;

// creamos la app
const app = express();

// habilitar rutas
app.use("/api", rutas);


// levantar el servidor
app.listen(PORT, () => {
    console.log("Servidor iniciado en http://127.0.0.1:3000");
});
