var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
//  db.Article.findAll().success(function (articles) {
//    res.render('index', {
//      title: 'HOME',
//      articles: articles
//    });
//  });

    res.json({
        t1: 'move to route to config',
        t2: 'use POST/PUT',
        t3: 'make modules',
        t4: 'express?'
    })
});
