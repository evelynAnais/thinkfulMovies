const router = require('express').Router();
const controller = require('./theaters.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

// router
//   .route('/:theatersId')
//   .all(methodNotAllowed);

router  
  .route('/')
  .all(methodNotAllowed);

module.exports = router;