
import models from '../models/productos.model.js'
import handleError from '../utils/handleError.js'


//-----------------------------------------------------------//
const obtenerProductos = async (req,res) => {
    let id = req.params.id
     try {
        if(id){
            const producto = await models.leerProducto(id)
            return res.status(200).json(producto)
    
        }else{
            const productos = await models.leerProductos()
            return res.status(200).json(productos)
        }
    
     } catch (error) {
        console.log('No se pudo acceder a los productos', error)
       
        handleError(res,`[obtenerProductos] ${error.message} - no se pudo acceder a los productos`)
     }
   

    //res.send('GET ALL / ONE (READ)')
}


//-----------------------------------------------------------//
const guardarProducto = async (req,res) => {
     try {
        const producto = req.body
   
        const productoGuardado = await models.guardarProducto(producto)

        res.status(201).json(productoGuardado)

     } catch (error) {
        console.log('ERROR al guardar una pelicula', error)
        handleError(res, `[guardarProducto] ${error.message}- Error al guardar un producto`)
        
     }
    
}


//-----------------------------------------------------------//
const actualizarProducto = async (req,res) => {
    const { id } = req.params
    const producto = req.body

   try {
        const productoActualizado = await models.modificarProducto(id, producto)
        res.status(200).json(productoActualizado)
   } catch (error) {
    const mensaje = 'No se pudo actualizar el producto'
        console.log(mensaje, error)
        handleError(res, `[actualizarProducto] ${error.message}- ${mensaje}`)
    
   }
}


//-----------------------------------------------------------//
const borrarProducto = async (req,res) => {
    const  id  = req.params.id

    console.log(id)
    
    try {
        const productoBorrado = await models.eliminarProducto(id)
        res.status(200).json(productoBorrado)
    } catch (error) {
        const mensaje = 'No se pudo borrar el producto'
        console.log(mensaje, error)
        handleError(res, `[borrarProducto] ${error.message}- ${mensaje}`)
    }
    
}

export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}