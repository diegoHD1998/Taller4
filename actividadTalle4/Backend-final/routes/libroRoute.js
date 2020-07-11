'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var libroController = require('../controllers/libroController');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.post('/libro1', libroController.guardar);
api.get('/libro2', libroController.todos);
api.get('/libro3/:id', libroController.buscarPorId);
api.delete('/libro4/:id',libroController.Eliminar);
api.put('/libro5/:id',libroController.Actualizar);
api.get('/libro6',libroController.buscarAND)
 
// Exportamos la configuración
module.exports = api;
