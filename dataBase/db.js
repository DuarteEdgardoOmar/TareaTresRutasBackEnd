const mongoose = require('mongoose')

mongoose.set('strictQuery', true) //obligatorio desde version 7

require('dotenv').config() // acceso a variables de entorno

const connect = async () => {
    try {
        
        // await mongoose.connect(process.env.MONGO_DB_URI)

        await mongoose.connect('mongodb+srv://duarteomar1975:miclave123456@cluster0.6wxoahb.mongodb.net/farmaciaDB')

        console.log('db on')

    } catch (error) {

        console.log('fallo conexion, verifique...')
    }
}

module.exports = {connect}