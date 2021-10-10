const express = require('express');
require('dotenv').config();
require('./utils/DBsql');

const process = require('process')
const app = express()
const port = process.env.PORT

const routerApi = require('./routes/api-routes')

// Para evitar problemas de CORS (Cross-Origin Resource Sharing)
// Añado un middleWare que permite consultas desde orígines de terceros
// ...

// Para habilitar recepcion de JSONs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//API

app.use('/api',routerApi); // rutas para API

// WEB: usar el Router
//app.use('/',router); // rutas para WEB


// Manejo de errores


// Para manejar cualquier otro tipo de error de mi servidor:
app.get('*', (req, res)=>{
    res.status(404).send("Sorry... 404 Not Found");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})