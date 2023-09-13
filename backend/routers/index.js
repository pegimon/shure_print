const Router = require('express').Router
const router = Router()
const productRouter = require('./api/product.router')

router.use('/product',productRouter)

module.exports = router