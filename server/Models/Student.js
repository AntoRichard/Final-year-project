const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  start: {
    type: String,
    require: true
  },
  last: {
    type: String,
    require: true
  },
  college: {
    type: String,
    require: true
  },
  university: {
    type: String,
    require: true
  },
  marks: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('student', studentSchema);
