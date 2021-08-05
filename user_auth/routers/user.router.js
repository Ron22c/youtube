const express = require('express');

const Router = express.Router();

const userCtrl = require('../ctrl/user.ctrl');

Router.post('/register', userCtrl.registerUser);

Router.post('/authenticate', userCtrl.authenticateUser);

Router.get('/activate/:id', userCtrl.activateUser)

module.exports = Router;