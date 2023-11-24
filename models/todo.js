
const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
    title: String,
    description: String,
    done: Boolean,
});

module.exports = { Todo };