'use strict'
 
// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
const bcrypt = require('bcrypt-nodejs')
var Usuario1 = require('../models/usuario');
const servicio = require('../services/index1')


function guardarUsuario(req, res){
 
    let user = new Usuario1()
    user.nombreUser = req.body.nombreUser
    user.apellidoUser = req.body.apellidoUser
    user.correoUser = req.body.correoUser
    user.passUser = req.body.passUser

    user.save((err, usuarioGuardado)=>{
        if (err) res.status(500).send(`Error base de datos ${err}`)
        res.status(200).send({usuarioRegistrado: usuarioGuardado})
    })

}

function validar(req, res) {


  var password = req.body.passUser;


  Usuario1.findOne({'mail': req.body.correoUser}, (err, user) => {
      if (err) return res.status(500).send({ mensaje: 'error al realizar la peticion' })
      if (!user) return res.status(401).send({ mensaje: 'Error usuario no existe' })


      bcrypt.compare(password, user.pass, function(error, isMatch) {
          if (error) {
              res.status(500).send(`Error al validar usuario> ${error}`)
          } else if (!isMatch) {
              res.status(401).send({ 'mensaje':'incorrecto'})
          } else {
              res.status(200).send({ 'mensaje':'correcto','token':servicio.createToken(user)})

          }
        })
  })




}




function mostrarUsuario(req, res){
  Usuario1.find({},(err,user)=>{
      if (err) return res.status(500).send({mensaje:'error al realizar la peticion'})
      if(!user) return res.status(404).send({mensaje:'Error la persona no existe'})
  
      res.status(200).send({user})
  })
  
}







// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
  guardarUsuario,
  mostrarUsuario,
  validar
};
