const express = require('express')
const {orders} = require('../controllers')
const {joiSchemaOrder} = require('../model/schemas/orders')
const validation = require('../midlewares/validation')

const router = express.Router()
const orderValidation = validation(joiSchemaOrder)

router
    .post(
        '/',
        orderValidation,
        orders.addNewOrder
    )
    .get(
        '/:id',
        orders.getOrderDetails
    )

module.exports = router