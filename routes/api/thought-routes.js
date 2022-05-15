const router = require('express').Router()
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(createThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router