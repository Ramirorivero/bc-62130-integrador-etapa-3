
const handleError = (res, mensaje = "Algo sucedio", codigo = 500) =>{
 return res.status(codigo).res.json({ok: false, error: mensaje})
}

export default handleError