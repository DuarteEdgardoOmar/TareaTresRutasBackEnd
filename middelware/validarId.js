const {Producto} = require('../models/farmaciaModel')

const Validar = async (req,res,next)=>{

    /**valida si el id existe, caso contrario retorna error */
    try {
        const prod = await Producto.findById(req.params.id)

        if (prod !== null){
            next()
        }else{
            res.status(501).json({msg:'Id inexistente, verifique...'})
        }

    } catch (error) {
        res.status(501).json({msg:'Id inexistente, verifique...'})
    }
}

module.exports = {Validar}