const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller')

// sets up all the GET and POST routes for /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// sets up all the GET, PUT and DELETE routes for /api/users/:id
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router