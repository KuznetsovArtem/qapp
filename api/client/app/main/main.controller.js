'use strict';

angular.module('qApiApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.apiTest = [];

    $http.get('/api/things').success(function(things) {
      $scope.apiTest = things;
    });

  });
