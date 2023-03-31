const {Producto} = require('../models/farmaciaModel.js')


const ver_productos_farmacia = async (req,res) => {

    /**metodo de mongoose para ver todos los productos */
    const listadoFarmacia = await Producto.find()

    /**devuelve un json con todos los productos */
    res.status(200).json(listadoFarmacia)
}


const crear_producto_farmacia = async (req,res) => {

    try {
        /**creamos instancia del modelo de farmacia 
         * para dar de alta un nuevo producto.-
         * el producto lo recibimos por body
         */
        const productoAdd = new Producto(req.body)

        /**guardamos producto en base de datos */
        await productoAdd.save();

        /**muestra el producto a ser agregado */
        res.status(201).json(productoAdd)

    } catch (error) {
        res.status(501).json({msg : `error al guardar producto, verifique...`, error})
    }
}

module.exports = {ver_productos_farmacia, crear_producto_farmacia}