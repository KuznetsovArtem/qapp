'use strict';

/**
 * @ngdoc service
 * @name queue.Services.QueueModel
 * @description QueueModel Service
 */
angular
    .module('queue')
    .service('QueueModel', [

        function() {

            /**
             * @ngdoc function
             * @name queue.Services.QueueModel#method1
             * @methodOf queue.Services.QueueModel
             * @return {boolean} Returns a boolean value
             */
            method1 = function() {
                return true;
            };


            /**
             * @ngdoc function
             * @name queue.Services.QueueModel#method2
             * @methodOf queue.Services.QueueModel
             * @return {boolean} Returns a boolean value
             */
            method2 = function() {
                return false;
            };


            return {
                data : [1,2,3,4,5,6,7,8,9,0]
            }

        }
    ]);
