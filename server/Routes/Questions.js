const express = require('express');
const { getAllQuestions, getQuestions, postQuestions } = require('../Controllers/Questions');

const Router = express.Router();

Router.get('/questions', getAllQuestions);


Router.get('/questions/:code', getQuestions);

Router.post('/questions', postQuestions);

module.exports = Router;
