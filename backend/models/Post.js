const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    likes: {type: Number, default: 0},
    comments: [{
        body: {type: String, required: true}, date: {type: Date, default: Date.now},
    },],
});

module.exports = mongoose.model("Post", postSchema);
