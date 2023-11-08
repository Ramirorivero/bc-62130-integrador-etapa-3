import mongoose from "mongoose"

/* ESQUEMA DE MONGOOSE */

const carritoSchema = mongoose.Schema({
    carrito: Array
})

/* CREAMOS EL MODELO*/

const CarritoModel = mongoose.model('carritos', carritoSchema)

/* Metodo que nos va a servir de interfaza para interactuar con la DB*/

// CREAR CARRITO

const crearCarrito = async (carrito) =>{
    try {
        const carritoCreado = new CarritoModel({carrito})
        const carritoGuardado = await carritoCreado.save()

        return carritoGuardado
    } catch (error) {
        console.log('ERROR[crearCarrito]: Problemas al crear el carrito', error)
    }
}

export default {
    crearCarrito
}
