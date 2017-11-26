const { clientsController } = require('../controllers');
const express = require('express');

const {
  list,
} = clientsController;

const router = express.Router();

router
  // .get('/:clientId', retrieve)
  // .put('/:clientId', update)
  // .delete('/:clientId', destroy)
  // .post('/', create)
  .get('/', list);

module.exports = router;
