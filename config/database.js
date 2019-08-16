var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/flights',
    {useNewUrlParser: true, useCreateIndex: true}
);

var db = mongoose.connection;

db.on('connected', function() {
    console.log(`MongoDB at ${db.host}:${db.port}`);
});



/*
 * 
 * FLight.deleteMany({}, function(err, result) {console.log(result)});
 *  To delete all the documents
 */