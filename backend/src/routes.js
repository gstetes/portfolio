const express = require('express');

const routes = express.Router();

const MailController = require('./controllers/MailController');

routes.post('/mail', MailController.create);

module.exports = routes;
