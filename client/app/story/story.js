/**
 * Created by JonDai on 2016/5/4.
 */
'use strict';

angular.module('jondaiApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/story', {
        template: '<story></story>'
      })
      .when('/story/:id', {
        template: '<storyshow></storyshow>'
      })
    ;
  });
