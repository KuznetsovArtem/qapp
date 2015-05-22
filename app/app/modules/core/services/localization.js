/**
 * Created by askuznetsov on 5/22/2015.
 */
angular
    .module('core')
    .provider('localizationService', ['$injector', function($injector) {
        return {
            $get: ['$rootScope', function($rootScope) {
                var data = {
                    'login button' : 'Войти',
                    login : 'Логин'
                };

                $rootScope.translate = function(key) {
                    console.log(key);
                    if (data[key]) {
                        return data[key]
                    } else {
                        return key
                    }
                };

                return {
                    getMessage : function(key) {
                        return data[key];
                    }
                }
            }]
        }
    }]);
