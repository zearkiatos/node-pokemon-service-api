const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = Schema({
    pokemonId: {
        type: Number,
        required: true
    },
    user: {
        type: String
    },
    comment: {
        type: String,
        required: true
    },
    date: Date,
    anonymous: {
        type: Boolean,
        required: true,
        default: false
    }
});

const model = mongoose.model("Comment", mySchema);

module.exports = model;