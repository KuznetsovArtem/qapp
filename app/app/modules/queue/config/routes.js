'use strict';

/**
* @ngdoc object
* @name queue.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the queue module
*/
angular
    .module('queue')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name queue.config.route
             * @eventOf queue.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'queue'`, route to queue
             *
            */
            $stateProvider
                .state('queueList', {
                    url: '/queue/list',
                    templateUrl: 'modules/queue/views/queue-list.html',
                    controller: 'QueueListController'
                })
                .state('queueAdd', {
                    url: '/queue',
                    templateUrl: 'modules/queue/views/queue.html',
                    controller: 'QueueController'
                }).state('queueEdit', {
                    url: '/queue/:id',
                    templateUrl: 'modules/queue/views/queue.html',
                    controller: 'QueueController'
                });
        }
    ]);
