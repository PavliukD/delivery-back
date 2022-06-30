const {Product} = require('../../model')

const getAllProducts = async (req, res, next) => {
    try {
        const response = await Product.find({})
        let shopList = []

        const tmp = response.map(el => {
            const res = shopList.find(shop => shop === el.shopName)
            if (res){
                return
            }
            shopList.push(el.shopName)
            return
        })

        const data = {
            shopList,
            productsList: response
        }

        console.log(shopList)

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