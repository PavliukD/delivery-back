const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { nanoid } = require('nanoid')
const Joi = require('joi')

const emailRegexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+.[a-z]{2,4}$/

const orderSchema = new Schema({
    orderId: {
        type: Number,
        unique: true,
        default: nanoid()
    },
    customerName: {
        type: String
    },
    customerEmail: {
        type: String,
        validate(value) {
            const re = /\S+@\S+\.\S+/
            return re.test(String(value).toLowerCase())
        }
    },
    customerPhone: {
        type: Number
    },
    customerOrder: [
        {
            shopName: {
                type: String,
                required: true,
            },
            productName: {
                type: String,
                required: true,
            },
            productID: {
                type: Number,
            },
            price: {
                type: Number,
            }
        }
    ]
})

const joiSchemaOrder = Joi.object({
    orderId: Joi.number(),
    customerName: Joi.string(),
    customerEmail: Joi.string(),
    customerPhone: Joi.number(),
    customerOrder: Joi.array().items(
        Joi.object({
            shopName: Joi.string().required(),
            productName: Joi.string().required(),
            productID: Joi.number(),
            price: Joi.number()
        })
    )
})

const Order = model('order', orderSchema)

module.exports = {
    Order,
    joiSchemaOrder
}