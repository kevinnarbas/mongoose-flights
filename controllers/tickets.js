var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addTicket,
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


function addTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({}, function(err, ticket) {
            ticket.flight.push(flight._id);
            ticket.save(function(err) {
                res.redirect(`/flights/${flight._id}`);
            })
        });
    });
}
