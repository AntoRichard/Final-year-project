const monogoose = require('mongoose');

const questionsSchema = new monogoose.Schema({
    name: {
        type: String,
        required: true
    },
    queno:{
        type: Number,
        required: true
    },
    queOption: {
        type: String
    },
    question: {
        type: String,
        required: true
    },
    key: {
        type: Array,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
});

module.exports = monogoose.model('Question', questionsSchema);