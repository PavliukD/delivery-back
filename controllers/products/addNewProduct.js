const {Product} = require('../../model')

const addProduct = async (req, res, next) => {
    try {
        const {shopName, productName} = req.body
        const response = await Product.findOne({shopName, productName})
        if (response) {
            throw new Error(`product with name ${productName} allredy exist`)
        }
        
        const newProduct = {...req.body}
        const result = await Product.create(newProduct)
        res.status(201).json({
            status: 'success',
            code: 201,
            message: `Product ${productName} added`,
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = addProduct