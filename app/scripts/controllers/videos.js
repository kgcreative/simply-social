'use strict';

/**
 * @ngdoc function
 * @name simplySocial.controller:VideosController
 * @description
 * # VideosController
 * Controller of the simplySocial
 */
angular.module('simplySocial')
  .controller('VideosController', function ($scope, $rootScope, $http) {
  	$http.get('/data/content.json').success(function (data) { 
	    $rootScope.postData = data;

	    var allPosts = [];

	    for (var i = 0; i < data.posts.videos.length; i ++ ){
					allPosts.push(data.posts.videos[i]);
				}

			$scope.videoPosts = data.posts.videos;

	    });
  	});