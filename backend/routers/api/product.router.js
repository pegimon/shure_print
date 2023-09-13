const productController = require('../../controllers/product.controller')
const Router = require('express').Router
const router = Router()

router.get('/', productController.get_all_products)
router.get('/:_id', productController.get_product_by_id)
router.post('/', productController.add_product)
router.put('/:_id', productController.update_product)
router.delete('/:_id', productController.delete_product)
router.get('/getByCategory/:category_id', productController.get_by_category_id)
module.exports = router