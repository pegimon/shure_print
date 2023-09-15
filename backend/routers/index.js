const Router = require('express').Router
const router = Router()
const productRouter = require('./api/product.router')
const categoryRouter = require('./api/category.router')
const reviewsRouter = require('./api/reviews.router')
const userRouter = require('./api/user.router')

router.use('/product', productRouter)
router.use('/category', categoryRouter)
router.use('/reviews', reviewsRouter)
router.use('/user', userRouter)

module.exports = router