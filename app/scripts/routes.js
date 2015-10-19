'use strict';

module.exports = function (app, config) {

  app.get('/test', function (request, response) {
    console.log('in');
    return response.status(200).send(true);
  });
};