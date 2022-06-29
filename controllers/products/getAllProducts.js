const {Product} = require('../../model')

const getAllProducts = async (req, res, next) => {
    try {
        const data = await Product.find({})

        res.json({
            status: "success",
            code: 200,
            data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = getAllProducts