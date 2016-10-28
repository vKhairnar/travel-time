var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'travle.trap@gmail.com',
        pass: 'trap@123'
    },
    logger: true, // log to console
    debug: true // include SMTP traffic in the logs
}, {
    // default message fields

    // sender info
    from: 'travleTrap <travle.trap@gmail.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});
app.get('/send', function (req, res) {

    var mailOptions = {
        to: req.query.to,
        subject: 'comformation'
    };
    var message = {
        // Comma separated list of recipients
        to: '"' + req.query.fName + '' + req.query.lName + '"<' + req.query.email + '>',
        // Subject of the message
        subject: 'Booking Confirmation ✔', //
        // HTML body
        html: '<pre><h1>Thanks ' + req.query.fName + '</h1>' +
        '<P>' + req.query.fName + ' ' + req.query.lName + '(' + req.query.cNo + ')' +
        ' will depart form ' + req.query.fromLocation + ' to ' + req.query.toLocation + ' on ' + req.query.toDate +
        ' and return on ' + req.query.fromDate + '</P>' +
        ' <h3>Your Booking is confirmed</h3>'
    };
    console.log('mailOptions', mailOptions, message);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    smtpTransport.sendMail(message, function (error, response) {
        if (error) {
            console.log(error);
            res.end('error');
        } else {
            console.log('Message sent: ' + response.message);
            res.end('sent');
        }
    });
});

app.listen(5000, function () {
    console.log('Express Started on Port 5000');
});