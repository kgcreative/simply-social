'use strict';

/**
 * @ngdoc overview
 * @name simply-socialApp
 * @description
 * # simply-socialApp
 *
 * Main module of the application.
 */

angular
  .module('simply-socialApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    
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
