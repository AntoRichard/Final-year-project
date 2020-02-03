const express = require('express');
const {getSubject, getSingleSubject, postSubject } = require('../Controllers/Subject');

const Router = express.Router();

Router.get('/subject', getSubject);
Router.get('/subject/:code', getSingleSubject);
Router.post('/subject', postSubject);

module.exports = Router;