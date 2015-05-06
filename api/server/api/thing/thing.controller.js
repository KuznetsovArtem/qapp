/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([{
      name : 'Test Data #1',
      info : 'Test Data info #1'
    },{
      name : 'Test Data #2',
      info : 'Test Data info #2'
    },{
      name : 'Test Data #3',
      info : 'Test Data info #3'
    },{
      name : 'Test Data #4',
      info : 'Test Data info #4'
    },{
      name : 'Test Data #5',
      info : 'Test Data info #5'
    },{
      name : 'Test Data #6',
      info : 'Test Data info #6'
  }]);
};