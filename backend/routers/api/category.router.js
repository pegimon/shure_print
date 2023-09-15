const categoryController = require('../../controllers/category.controller')
const Router = require('express').Router
const router = Router()

router.get('/', categoryController.get_all_categories)
router.get('/:_id', categoryController.get_category_by_id)
router.post('/', categoryController.add_category)
router.put('/:_id', categoryController.update_category)
router.delete('/:_id', categoryController.delete_category)

module.exports = router