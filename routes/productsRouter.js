const express = require('express')
const {products} = require('../controllers')
const {joiSchemaProduct} = require('../model/schemas/products')
const validation = require('../midlewares/validation')

const router = express.Router()
const productValidation = validation(joiSchemaProduct)

router
    .get(
        '/',
        products.getAllProducts
    )
    .post(
        '/',
        productValidation,
        products.addProduct
    )

module.exports = router