const categoryController = require('../../controllers/category.controller')
const Router = require('express').Router
const router = Router()

router.get('/', categoryController.get_all_reviews)
router.get('/:_id', categoryController.get_reviews_by_id)
router.post('/', categoryController.add_reviews)
router.put('/:_id', categoryController.update_reviews)
router.delete('/:_id', categoryController.delete_reviews)

module.exports = router