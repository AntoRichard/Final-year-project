const express = require('express');
const { getAddStudent, postAddStudent} = require('../Controllers/AddStudent');

const Route = express.Router();

Route.get('/student', getAddStudent)
Route.post('/add-student', postAddStudent)

module.exports = Route;