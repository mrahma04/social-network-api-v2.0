const router = require('express').Router()
const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
    deleteThoughtByUserId
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    // .post(createThought)

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(createThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

router
    .route('/thoughts/:userId')
    .delete(deleteThoughtByUserId)

module.exports = router