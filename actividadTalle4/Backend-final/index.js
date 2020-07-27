'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var cors = require('cors')
app.use(cors())
app.options('*', cors())

var libro_routes = require('./routes/libroRoute');
var usuario_routes = require('./routes/usuarioRoute');


const mongoose = require('mongoose')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



/* app.get('/api/persona/:rut',(req,res)=>{

    let rut = req.params.rut 
   res.status(200).send(`El rut es:${rut}`);

    
})

app.post('/api/persona',(req,res)=>{

    let rut = req.body.rut;
    res.status(200).send({persona:req.body})
}) */

app.use('/api', libro_routes);
app.use('api/',usuario_routes);


mongoose.connect('mongodb+srv://DiegoMunoz:colocolo11@cluster0-gonmb.mongodb.net/libro?retryWrites=true&w=majority',(err, res)=>{

    if(err){
        console.log(err)
    }else{
        app.listen(5000, () => {
            console.log("Esta conectado en puerto 5000")
        })

    }

   
})