const express = require('express');
const Router = express.Router();

const { postValidate } = require('../Controllers/validate');

Router.post('/validate', postValidate);

module.exports = Router;