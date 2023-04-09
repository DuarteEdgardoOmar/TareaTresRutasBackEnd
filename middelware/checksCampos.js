const { check } = require('express-validator')

const checksCampos = [
    check('marca').not().isEmpty().withMessage('campo requerido, verifique...').isString().withMessage('el dato debe ser un String'),
    check('descripcion').not().isEmpty().withMessage('campo requerido, verifique...').isString().withMessage('el dato debe ser String'),
    check('precio').not().isEmpty().withMessage('campo requerido, verifique...').isNumeric().withMessage('el dato debe ser numerico'),
    check('stock').not().isEmpty().withMessage('campo requerido, verifique...').isNumeric().withMessage('el dato debe ser numerico'),
    check('activo').not().isEmpty().withMessage('campo requerido, verifique...').isBoolean().withMessage('el campo debe ser true o false')
]

module.exports = checksCampos