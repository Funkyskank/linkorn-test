const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes');
// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require routes into the application
router(app);

// Setup a default catch-all route
app.get('*', (req, res) => res.status(404).send({
  message: 'Page Not Found'
}));

module.exports = app;
