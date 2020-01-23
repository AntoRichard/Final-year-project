const express = require('express');
const { postQuestions } = require('../Controllers/Questions');

const Router = express.Router();

Router.post('/questions', postQuestions)

module.exports = Router;