/**
 * Created by JonDai on 2016/5/6.
 */
(function () {
  class UserCenterController{
    constructor($http) {
      this.$http = $http;
      this.awesomeStories = [];
    }
  }

  angular.module('jondaiApp')
    .component('usercenter', {
      templateUrl: 'app/usercenter/usercenter.html',
      controller: UserCenterController
    });
});
