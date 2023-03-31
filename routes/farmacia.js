const express = require('express')
const routerFarmacia = express.Router()
const {ver_productos_farmacia, crear_producto_farmacia} = require ('../controllers/perfumeriaControllers')


//ruta a listado de productos
routerFarmacia.get('/ver', ver_productos_farmacia)

//ruta a crear nuevo producto
routerFarmacia.post('/crear', crear_producto_farmacia)



module.exports = routerFarmacia