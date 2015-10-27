"use strict";

angular
    .module('app', [
        'ui.router'
    ]).config([
        '$urlRouterProvider','$stateProvider', 
        function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: 'homeController',
                    resolve: {
                        //friends: ['$http', function ($http) {
                        //        return $http.get('/api/friends.json').then(function(response) {
                        //            return response.data;
                        //        });
                        //    }
                        //]

                        friends: ['Friends', function(freinds) {
                            return freinds.get();
                        }]
                    }
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html',
                    controller:'aboutController'
                });
        }
    ]);