'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'Home',
      'link': '/'
    },
    {
      'title':'故事',
      'link' : '/story'
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
