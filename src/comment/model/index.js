const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = Schema({
    pokemonId: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoose.model("Comment", mySchema);

module.exports = model;