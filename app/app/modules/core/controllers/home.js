'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('HomeController', ['$scope',
        '$http',
        '$cordovaVibration',
        '$cordovaNetwork',
        '$cordovaGeolocation',
        function($scope, $http, $cordovaVibration, $cordovaNetwork, $cordovaGeolocation) {
            $scope.moduleName = 'Home Module';

            // http
            $http.defaults.useXDomain = true;

            $scope.useHttp = function() {
                $http.get('https://jsonp.afeld.me/?url=http://jsonview.com/example.json')
                    .success(function(data) {
                        console.log(data);
                        alert(data.awesome);
                    });
            };
            // vibro
            $scope.vibrate = function() {
                $cordovaVibration.vibrate([100, 200, 100, 500, 200, 500, 100, 200, 100, 500, 200, 500]);
            };

            // net
            $scope.networkType = null;
            $scope.connectionType = null;

            document.addEventListener("deviceready", function () {
                $scope.networkType = $cordovaNetwork.getNetwork();

                if ($cordovaNetwork.isOnline()) {
                    $scope.connectionType = 'Online';
                }
                else if ($cordovaNetwork.isOffline()) {
                    $scope.connectionType = 'Offline';
                }
                else {
                    $scope.errorMsg = 'Error getting isOffline / isOnline methods';
                }
            }, false);

            // geolocation
            $scope.getLocation = function () {

                $cordovaGeolocation
                    .getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
                    .then(function (position) {
                        console.log("position found");
                        $scope.position = position;
                        // long = position.coords.longitude
                        // lat = position.coords.latitude
                    }, function (err) {
                        console.log("unable to find location");
                        $scope.errorMsg = "Error : " + err.message;
                    });
            };


        }
    ]);
