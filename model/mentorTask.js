const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const taskScheme = new mongoose.Schema({
    task: {
        type: String,
    },
    created_given: {
        type: Date,
        default: Date.now
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
});

module.exports = new mongoose.model("task", taskScheme);