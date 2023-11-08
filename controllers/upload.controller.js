
const uploadImagen = (req, res, next) => {
    const file = req.file

    if(!file){
         
         res.status(400).send('No se recibio ninguna imagen')   

    }
    res.status(200).json({foto: file.filename})
}

export default{
    uploadImagen
}