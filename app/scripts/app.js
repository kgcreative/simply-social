'use strict';

/**
 * @ngdoc overview
 * @name simplySocialApp
 * @description
 * # simplySocialApp
 *
 * Main module of the application.
 */

angular
  .module('simplySocialApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings'
      })
      .otherwise({
        redirectTo: '/'
      }); 
  });
