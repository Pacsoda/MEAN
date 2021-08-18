const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

//cors
app.use(cors())

//conectasmos a la BD
conectarDB();

//hablitamos JSON en la app
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

// Definimos ruta principal
/*app.get('/', (req,res) => {
    res.send('Hola Mundo');
})*/

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente')
})