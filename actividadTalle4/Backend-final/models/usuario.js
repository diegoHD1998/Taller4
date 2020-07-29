'use strict'

const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = Schema(
    {

        nombreUser:String,
        apellidoUser:String,
        correoUser:String,
        passUser:String


    }
)

UserSchema.pre('save',function(next){
    const usuario = this;
    if(!usuario.isModified('passUser')){
      return next();
    }



  bcrypt.genSalt(10,(err,salt)=> {
    if(err){
      next(err);
    }
    bcrypt.hash(usuario.passUser,salt,null,(err,hash)=>{
      if(err){
        next(err);
      }
      usuario.passUser = hash;
      next();

    })
  })
})


module.exports = mongoose.model('usuario',UserSchema)