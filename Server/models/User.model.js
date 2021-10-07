const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {

        username: {
            type: String,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        country: {
            type: String,
        },
        
        rol: {
            type: String,
            enum: ['admin', 'client']
        },

    },
    {
        timestamps: true,
    }
)

const User = model('User', userSchema)

module.exports = User