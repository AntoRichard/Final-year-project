const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },date: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('subjects', subjectSchema);