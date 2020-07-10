'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const LibroSchema = Schema(
    {
        nombreLibro:String,
        autor:String,
        añoPublic:String,
        idioma:{type:String,enum:['Espanol','Ingles']}
    }
)

module.exports = mongoose.model('libros',LibroSchema)