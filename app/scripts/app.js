'use strict';

/**
 * @ngdoc overview
 * @name simplySocial
 * @description
 * # simplySocial
 *
 * Main module of the application.
 */

angular
  .module('simplySocial', [
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
      //.when('/masonry', {
      //  templateUrl: 'views/masonry.html',
      //  controller: 'MasonryController',
      //  controllerAs: 'masonry'
      //})
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosController',
        controllerAs: 'photos'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosController',
        controllerAs: 'videos'
      })
      //.when('/about', {
      //  templateUrl: 'views/about.html',
      //  controller: 'AboutController',
      //  controllerAs: 'about'
      //})
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings'
      })
      .otherwise({
        redirectTo: '/'
      });
});