/**
 * Created by JonDai on 2016/5/4.
 */
'use strict';

(function(){

  class StoryController{
    constructor($http) {
      this.$http = $http;
      this.awesomeStories = [];
    }

    $onInit() {
      this.$http.get('/api/story').then(response => {
        this.awesomeStories = response.data;
      });
    }
  }

  angular.module('jondaiApp')
    .component('story', {
      templateUrl: 'app/story/story.html',
      controller: StoryController
    });
})();
