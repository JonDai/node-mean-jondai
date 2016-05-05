/**
 * Created by JonDai on 2016/5/4.
 */
'use strict';

(function(){

  class StoryController{
    constructor($http) {
      this.$http = $http;
      this.awesomeStories = [];
      this.story='';
    }

    $onInit() {
      this.$http.get('/api/story').then(response => {
        this.awesomeStories = response.data;
      });
    }

    showStory(story){
      this.story = story;
    }
  }

  /**
   * This StoryDetailController
   */
  class StoryDetailController{
    constructor($http,$location) {
      this.$http = $http;
      this.location = $location;
      this.story='';
    }

    $onInit() {
      this.$http.get('/api'+this.location.$$url).then(response =>{
        this.story = response.data;
        $('.story-body').html(this.story.body);
      });
    }
  }

  angular.module('jondaiApp')
    .component('story', {
      templateUrl: 'app/story/story.html',
      controller: StoryController
    })
    .component('storyshow',{
      templateUrl: 'app/story/story-detail.html',
      controller: StoryDetailController
    });
})();
