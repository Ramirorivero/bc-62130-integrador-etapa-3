import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import path from 'node:path'

import routerProductos from './routers/productos.router.js'
import routerUpload from './routers/upload.router.js'
import routerCarrito from './routers/carrito.router.js'
import handleConnection from './utils/handleConnection.js'



const app = express()
const PORT = process.env.PORT || 3000
//const PORT = 8080
const corsConfig ={
    origin: process.env.URL_FRONT_CORS //http://127.0.0.1:5173
}


// CONEXION MONGODEB

//handleConnection(process.env.URI_MLOCAL)
handleConnection(process.env.URI_MREMOTA)



// ! Middlewares
app.use(express.static(path.join('public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsConfig))

// ! Rutas
app.use('/api/productos', routerProductos)
app.use('/api/upload', routerUpload)
app.use('/api/carrito',routerCarrito)


app.all('*',(req,res)=>{
    res.status(404).send(`La ruta ${req.url} utilizando ${req.method} no esta disponible`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

