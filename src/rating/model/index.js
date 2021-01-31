const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = Schema({
    pokemonId: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    }
});

const model = mongoose.model("Rating", mySchema);

module.exports = model;