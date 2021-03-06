const { User, Thought } = require('../models')

const ThoughtController = {
    async getAllThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find({})
            res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async getThoughtById({ params }, res) {
        try {
            const dbThoughtData = await Thought.findOne({
                _id: params.thoughtId
            })
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return
            }
            res.json(dbThoughtData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    // 'thoughts' have to be associated to 'users'
    // retrieve the 'user' id from params
    // find the user and then '$push' the thought into it
    async createThought({ params, body }, res) {
        try {
            const dbThoughtData = await Thought.create(body)
            const dbUserData = await User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            )
            res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async deleteThoughtByUserId({ params, body }, res) {
        try {
            const dbUserData = await User.findOne({
                _id: params.userId
            })
            console.log('HELLOOOOO', dbUserData.thoughts)
            const dbThoughtData = await User.findOneAndUpdate(
                { _id: params.userId },
                { $pullAll: { thoughts: dbUserData.thoughts } },
                { new: true }
            )
            res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async updateThought({ params, body }, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                body,
                { new: true }
            )
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return
            }
            res.json(dbThoughtData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async deleteThought({ params }, res) {
        try {
            const dbThoughtData = await Thought.findOneAndDelete({
                _id: params.thoughtId,
            })
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return
            }
            res.json(dbThoughtData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async createReaction({ params, body }, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId, },
                { $push: { reactions: body } },
                { new: true }
            )
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return
            }
            res.json(dbThoughtData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    async deleteReaction({ params }, res) {
        try {
            console.log('INSIDE DELETE')
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: params.thoughtId, },
                { $pull: { reactions: { reactionId: params.reactionId } } },
                { new: true }
            )
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return
            }
            res.json(dbThoughtData)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    }
}

module.exports = ThoughtController