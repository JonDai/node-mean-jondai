'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': '首页',
      'link': '/'
    },
    {
      'title': '音乐',
      'link': '/music'
    },
    {
      'title':'故事',
      'link' : '/story'
    },
    {
      'title': '个人中心',
      'link': 'usercenter'
    }
  ];

  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
    }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('jondaiApp')
  .controller('NavbarController', NavbarController);
