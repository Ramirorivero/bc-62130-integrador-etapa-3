import mongoose from 'mongoose'

const handleConnection = async (uri)=>{
    try {
        await mongoose.connect(uri)
        console.log('Conexion a Mongo realizada con exito!')
    } catch (error) {
        console.log('Error al conectar a MongoDB',error)
    }
      
    }

    export default handleConnection