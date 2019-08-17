var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
}


function newTicket(req, res) { 
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {title: 'Add Ticket', tickets});
    });
};



function create(req, res) {
    Ticket.create(req.body, function(err) {
        console.log(req.body);
        res.redirect('flights')
    });
};

