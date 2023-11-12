
const uploadImagen = (req, res, next) => {
    const file = req.file

    if(!file){
         
         res.status(400).send('No se recibio ninguna imagen')   

    }
   const urlCompletaBack = `${req.protocol}://${req.get('host')}/uploads/${file?.filename}`
  // const   urlCompletaBack = `${process.env.DEPLOY_URL}/uploads/${file?.filename}`;
    res.status(200).json({foto: urlCompletaBack})
}

export default{
    uploadImagen
}