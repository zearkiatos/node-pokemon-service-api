const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = Schema({
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const model = mongoose.model("Comment", mySchema);

module.exports = model;