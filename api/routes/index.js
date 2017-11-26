const clientsRouter = require('./clientsRouter');

const express = require('express');

module.exports = (app) => {
  const apiRoutes = express.Router();

  apiRoutes.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the CRM API!'
  }));

  apiRoutes.use('/clients', clientsRouter);

  apiRoutes.all('/clients', (req, res) => res.status(405).send({
    message: 'Method Not Allowed'
  }));

  app.use('/api', apiRoutes);
};
