'use strict'

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

module.exports = mongoose.model('usuario',UserSchema)