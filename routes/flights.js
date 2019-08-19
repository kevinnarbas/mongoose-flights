var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id/tickets/new', flightsCtrl.addTicket);
router.get('/:id', flightsCtrl.show);
router.post('/:id/tickets', flightsCtrl.createTicket);
router.post('/', flightsCtrl.create);
router.delete('/:id', flightsCtrl.delete);

module.exports = router;

