const express = require('express')
const app = express()
const {connect} = require('./dataBase/db.js')
const route_farmacia = require('./routes/farmacia')

//middelware que permite enviar y recibir obj Json
app.use(express.json())

//ruta a farmacia
app.use('/', route_farmacia)

//conexion con base de datos
connect()

module.exports = app