const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { nanoid } = require('nanoid')
const Joi = require('joi')

const productSchema = new Schema({
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
})

const joiShemaProduct = Joi.object({
    shopName: Joi.string().required(),
    productName: Joi.string().required(),
    productID: Joi.number(),
    price: Joi.number()
})

const Product = model('product', productSchema)

module.exports = {
    Product,
    joiShemaProduct
}