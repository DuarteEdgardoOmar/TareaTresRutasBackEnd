const mongoose = require('mongoose')
const { Schema } = mongoose;

const farmaciaSchema = new Schema({

    marca: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    activo: { type: Boolean, required: true }

})

/**creacion del modelo a partir del Schema*/
const Producto = mongoose.model('Producto', farmaciaSchema)

//exportamos el modelo
module.exports = { Producto }