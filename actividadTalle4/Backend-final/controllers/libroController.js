'use strict'
 
// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Libro = require('../models/libros');
 
// Creamos un método en el controlador, en este caso una accion de pruebas
function guardar(req, res){
 
    let libro = new Libro()
    libro.nombreLibro = req.body.nombreLibro
    libro.autor = req.body.autor
    libro.añoPublic = req.body.añoPublic
    libro.idioma = req.body.idioma

    libro.save((err, libroguardado)=>{
        if (err) res.status(500).send(`Error base de datos ${err}`)
        res.status(200).send({libroInsertado: libroguardado})
    })
}

function todos(req, res){
    Libro.find({},(err,libro)=>{
        if (err) return res.status(500).send({mensaje:'error al realizar la peticion'})
        if(!libro) return res.status(404).send({mensaje:'Error la persona no existe'})
    
        res.status(200).send({libro})
    })
    
}
function buscarAND(req,res){
    let añoreq = req.query.añoPublic
    let idiomareq = req.query.idioma

    Libro.find({añoPublic: añoreq, idioma: idiomareq},(err, libro)=>{
        if(!libro) return res.status(404).send({mensaje:'Error el libro no exixte'})
        res.status(200).send({libro})

    })
}

function buscarPorId(req, res){
    let idLibro = req.params.id
    Libro.findById(idLibro,(err,libro)=>{
        if (err) return res.status(500).send({mensaje:'error al realizar la peticion'})
        if(!libro) return res.status(404).send({mensaje:'Error la persona no existe'})

        res.status(200).send({libro})
    })
}

function Eliminar(req, res){
    let idlibro2 = req.params.id
    Libro.findById(idlibro2,(err,libro)=>{
        if (err) return res.status(500).send({mensaje:'error al borrar el libro'})
        libro.remove(err=>{
            if (err) return res.status(500).send({mensaje:'error al borrar el libro'})
            res.status(200).send({mensage:"El libro fue eliminado"})
        })
    })
}

function Actualizar(req, res){
    let idlibro3 = req.params.id
    let update = req.body

    Libro.findByIdAndUpdate(idlibro3,update, (err, libroActualizado)=>{
        if (err) return res.status(500).send({mensaje:'error al actualizar el libro'})
        res.status(200).send({libroActualizado})

    })
}
 
// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
    guardar,
    todos,
    buscarPorId,
    Eliminar,
    Actualizar,
    buscarAND
};
