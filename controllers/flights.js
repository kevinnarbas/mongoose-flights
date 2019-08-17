var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'All Flights',flights});
    });
};


function newFlight(req, res) {
    res.render('flights/new', {title: 'Add Flight'})
};

function create(req, res) {
    console.log(req.body)
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('flights');
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {title: 'Flight Details', flight, tickets})
        });
    });
}

