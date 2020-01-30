const mongoose = require("mongoose");

const mentorScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    sector: {
        type: String
    },
    posting: {
        type: String
    },
    CGPA: {
        type: String
    },
    sscpercentage: {
        type: String
    },
    hscpercentage: {
        type: String
    },
    intership: {
        type: String,
    },
    working_at: {
        type: String,
    },
    other_acheivement_score: {
        type: String,
    },
});

module.exports = mongoose.model("mentor", mentorScheme);