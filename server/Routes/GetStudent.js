const express = require('express');
const {getStudent} = require('../Controllers/GetStudent');

const Router = express.Router();

Router.get('/student/:id', getStudent);

module.exports = Router;