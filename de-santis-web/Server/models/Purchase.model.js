const { Schema, model } = require("mongoose");
const User = require("./User.model");
const Track = require('./Track.model')

const purchaseSchema = new Schema(
    {
        track: {
            type: Schema.Types.ObjectId,
            ref: Track,
        },

        date: {
            type: Date,
            default: Date.now
        },

        email: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },
        
        phone: {
            type: Number
        },
        
        client: {
            type: Schema.Types.ObjectId,
            ref: User,
        },


    });

const Purchase = model("Purchase", purchaseSchema);

module.exports = Purchase;