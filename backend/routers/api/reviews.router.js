const reviewsController = require('../../controllers/reviews.controller')
const Router = require('express').Router
const router = Router()

router.get('/', reviewsController.get_all_reviews)
router.get('/:_id', reviewsController.get_reviews_by_id)
router.post('/', reviewsController.add_reviews)
router.put('/:_id', reviewsController.update_reviews)
router.delete('/:_id', reviewsController.delete_reviews)

module.exports = router