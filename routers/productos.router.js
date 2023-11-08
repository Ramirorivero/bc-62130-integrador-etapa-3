import express from 'express'
const routerProductos = express.Router()

import controller from '../controllers/productos.controller.js'
import validator from '../validators/productos.validator.js'

//http://localhost:8080/api/productos/
routerProductos.get('/:id?',controller.obtenerProductos)



//http://localhost:8080/api/productos/
routerProductos.post('/',validator.productoCreateValidator, controller.guardarProducto)



//http://localhost:8080/api/productos/id
routerProductos.put('/:id',controller.actualizarProducto)



//http://localhost:8080/api/productos/id
routerProductos.delete('/:id',validator.productoDeleteValidator, controller.borrarProducto)

export default routerProductos