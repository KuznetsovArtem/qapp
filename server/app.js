

var express = require('express'),
  config = require('./config/config'),
  db = require('./app/models');

var app = express();

require('./config/express')(app, config);

app.listen(config.port);

//db.sequelize
//  .sync()
//  .then(function () {
//    app.listen(config.port);
//  }).catch(function (e) {
//    throw new Error(e);
//  });

