const { Schema, model } = require('mongoose')
const Thought = require('./Thought')
const { isEmail } = require('validator')

// first define the Schema for the model
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

// create the model
const user = model('User', UserSchema)

module.exports = user