const { Producto } = require('../models/farmaciaModel.js')


const buscar_producto_id = async (req, res) => {

    try {
        const prod = await Producto.findById(req.params.id)
        res.status(200).json(prod)
    } catch (error) {
        res.status(501).json({ msg: 'producto inexistente, verifique...' })
    }

}

const ver_productos_farmacia = async (req, res) => {

    /**metodo de mongoose para ver todos los productos */
    const listadoFarmacia = await Producto.find()

    /**devuelve un json con todos los productos */
    res.status(200).json(listadoFarmacia)
}

const crear_producto_farmacia = async (req, res) => {
    try {
        const productoAdd = new Producto(req.body)

        /**guardamos producto en base de datos */
        await productoAdd.save();

        /**muestra el producto a ser agregado */
        res.status(201).json(productoAdd)

    } catch (error) {
        res.status(501).json({ msg: `error al guardar producto, verifique...`, error })
    }

}

const editar_producto_id = async (req, res) => {

    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(202).json({ msg: 'Producto actualizado correctamente' })

    } catch (error) {
        res.status(501).json({ msg: 'error en actualizacion de producto, verifique...' })

    }
}

const eliminar_producto_id = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id)
        res.json({ msg: 'el producto ha sido eliminado con exito' })
    } catch (error) {
        res.status(501).json({ msg: 'error en eliminacion de producto, verifique...' })
    }
}

module.exports = {
    ver_productos_farmacia,
    crear_producto_farmacia,
    buscar_producto_id,
    editar_producto_id,
    eliminar_producto_id
}