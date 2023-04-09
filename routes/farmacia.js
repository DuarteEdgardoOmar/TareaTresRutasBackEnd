const express = require('express')

const routerFarmacia = express.Router()

const { ver_productos_farmacia,
    crear_producto_farmacia,
    buscar_producto_id,
    editar_producto_id,
    eliminar_producto_id } = require('../controllers/perfumeriaControllers')

const { Validar } = require('../middelware/validarId')

const checksCampos = require ( '../middelware/checksCampos')

const {validationResultsCampos} = require ( '../middelware/validationResultsCampos')

//ruta a listado de productos
//http://localhost:8080/ver
routerFarmacia.get('/ver', ver_productos_farmacia)

//ruta a crear nuevo producto
//http://localhost:8080/crear
routerFarmacia.post('/crear',checksCampos,validationResultsCampos, crear_producto_farmacia)

//buscar producto por id
//http://localhost:8080/buscar/642725df47d2d4bc2f501531
routerFarmacia.get('/buscar/:id', Validar, buscar_producto_id)

//editar producto por id
//http://localhost:8080/editar/64260db3bbd5517cdd55c2c5
routerFarmacia.put('/editar/:id', Validar,checksCampos,validationResultsCampos, editar_producto_id)

//eliminar producto
//http://localhost:8080/eliminarID/642755281bce6d4362d4d37
routerFarmacia.delete('/eliminarID/:id',Validar, eliminar_producto_id)

module.exports = routerFarmacia