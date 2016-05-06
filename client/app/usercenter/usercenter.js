/**
 * Created by JonDai on 2016/5/6.
 */
'use strict'
angular.module('jondaiApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/usercenter',{
        template:'<usercenter></usercenter>'
      })
  })
