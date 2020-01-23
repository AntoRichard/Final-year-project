const express = require('express');
const {getSubject, postSubject } = require('../Controllers/Subject');

const Router = express.Router();

Router.get('/subject', getSubject);
Router.post('/subject', postSubject);

module.exports = Router;