process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// set up
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config/config');
var app = express(); // create our app w/ express

console.log('Environment - ' + process.env.NODE_ENV);

app.use(express.static(__dirname + config.dir)); // set the static files location /public/img will be /img for users
app.use(logger('dev')); // log every request to the console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes
require('./app/scripts/routes.js')(app, config);

var server = app.listen(config.port);
var date = new Date();
console.log(date+ ' - Server running at http://127.0.0.1:' + config.port);