const mongoose = require('mongoose')

mongoose.set('strictQuery', true) //obligatorio desde version 7

require('dotenv').config() // acceso a variables de entorno

const connect = async () => {


    try {
        
        await mongoose.connect(process.env.MONGO_DB_URI)

        console.log('db on')

    } catch (error) {

        console.log('fallo conexion, verifique...')
    }
}

module.exports = {connect}