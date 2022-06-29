const { nanoid } = require('nanoid')
const {Order} = require('../../model')

const addNewOrder = async (req, res, next) => {
    try {
        const newOrder = {
            ...req.body,
            id: nanoid(),
        }
        const response = await Order.create(newOrder)

        res.status(201).json({
            status: 'success',
            code: 201,
            message: `Product ${productName} added`,
            data: response
        })

    } catch (error) {
        next(error)
    }
}

module.exports = addNewOrder