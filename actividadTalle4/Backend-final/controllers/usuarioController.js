'use strict'
 
// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Usuario1 = require('../models/usuario');


function guardarUsuario(req, res){
 
    let user = new Usuario1()
    user.nombreUser = req.body.nombreUser
    user.apellidoUser = req.body.apellidoUser
    user.correoUser = req.body.correoUser
    user.passUser = req.body.passUser

    libro.save((err, UsuarioRegistrado)=>{
        if (err) res.status(500).send(`Error base de datos ${err}`)
        res.status(200).send({usuarioRegistrado: usuarioGuardado})
    })
}




// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
  guardarUsuario
};