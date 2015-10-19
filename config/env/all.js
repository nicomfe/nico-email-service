'use strict';

module.exports = {
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002,
  ip: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"
};