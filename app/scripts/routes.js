'use strict';

module.exports = function (app, config) {
  console.log(config.test);
  var nodemailer = require('nodemailer');
  var ses = require('nodemailer-ses-transport');

  app.get('/test', function (request, response) {

    var transporter = nodemailer.createTransport(ses({
      accessKeyId: 'AWSACCESSKEY',
      secretAccessKey: 'AWS/Secret/key'
    }));
    transporter.sendMail({
      from: 'sender@address',
      to: 'receiver@address',
      subject: 'hello',
      text: 'hello world!'
    });
    return response;
  });
};