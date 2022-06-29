const {Order} = require('../../model')

const getOrderDetails = async (req, res, next) => {
    try {
        const {id} = req.params
        const data = await Order.findOne({id})

        if (!data) {
            throw new Error('Order not found')
        }

        res.json({
            status: "success",
            code: 200,
            data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = getOrderDetails