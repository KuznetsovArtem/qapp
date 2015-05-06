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
        'getCurrentPosition', 'getWeather',
        function($scope, getCurrentPosition, getWeather) {
            $scope.moduleName = 'Home Module';

            // getting weather for http test
            getCurrentPosition(function(position) {
                getWeather(
                    position.coors.latitude,
                    position.coord.longitude,
                    function(location, weather) {
                        $scope.location = location;
                        $scope.weater = weather
                    }
                )
            });
        }
    ])
    .factory('getCurrentPosition', function(deviceReady, $document, $window, $rootScope){
        return function(done) {
            deviceReady(function(){
                navigator.geolocation.getCurrentPosition(function(position){
                    $rootScope.$apply(function(){
                        done(position);
                    });
                }, function(error){
                    $rootScope.$apply(function(){
                        throw new Error('Unable to retreive position');
                    });
                });
            });
        };
    })
    .factory('getWeather', function($http){
        return function(lat, lng, done) {
            $http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng})
                .success(function(data, status, headers, config) {
                    done(data.name, data.weather[0].description);
                })
                .error(function(data, status, headers, config) {
                    throw new Error('Unable to get weather');
                });
        };
    })
    .factory('deviceReady', function(){
        return function(done) {
            if (typeof window.cordova === 'object') {
                document.addEventListener('deviceready', function () {
                    done();
                }, false);
            } else {
                done();
            }
        };
    });
