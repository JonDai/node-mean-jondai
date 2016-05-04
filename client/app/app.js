'use strict';

angular.module('jondaiApp', [
  'jondaiApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/story',{
        template: '<story></story>'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
