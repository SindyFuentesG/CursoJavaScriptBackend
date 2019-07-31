var express = require('express');
var router = express.Router();

var reservas_controller = require('../controllers/reservasController');

router.post('/', reservas_controller.create_book);
  
  module.exports = router;