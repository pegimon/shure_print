const Router = require('express').Router
const router = Router()
const productRouter = require('./api/product.router')
const categoryRouter = require('./api/category.router')

router.use('/product', productRouter)
router.use('/category', categoryRouter)

module.exports = router