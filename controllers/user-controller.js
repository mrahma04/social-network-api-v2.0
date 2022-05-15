const { User } = require('../models')

// controllers are all the functions for CRUD operations on the models
const userController = {
    async getAllUsers(req, res) {
        try {
            const dbUserData = await User.find({})
                // populate returns the data from the 'joined' tables
                .populate({
                    path: 'thoughts',
                    select: '-__v'
                })
                // select returns the fields listed
                // a '-' tells it to EXCLUDE that particular field
                .select('-__v')
            res.json(dbUserData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async getUserById({ params }, res) {
        try {
            const dbUserData = await User.findOne({
                _id: params.userId
            })
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' })
                return
            }
            res.json(dbUserData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async createUser({ body }, res) {
        try {
            const dbUserData = await User.create(body)
            res.json(dbUserData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async updateUser({ params, body }, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: params.userId },
                body,
                { new: true }
            )
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' })
                return
            }
            res.json(dbUserData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async deleteUser({ params }, res) {
        try {
            const dbUserData = await User.findOneAndDelete({
                _id: params.userId,
            })
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' })
                return
            }
            res.json(dbUserData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async addFriend({ params }, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: params.userId },
                // 'addToSet' operator adds a value to an array unless the value is already present
                // 'push' will keep pushing values to end of Array regardless of duplicates
                { $addToSet: { friends: params.friendId } },
                { new: true }
            )
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' })
                return
            }
            res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async deleteFriend({ params }, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { friends: params.friendId } },
                { new: true }
            )
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' })
                return
            }
            res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }
}

module.exports = userController