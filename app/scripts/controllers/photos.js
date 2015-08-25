'use strict';

/**
 * @ngdoc function
 * @name simplySocial.controller:PhotosController
 * @description
 * # PhotosController
 * Controller of the simplySocial
 */
angular.module('simplySocial')
  .controller('PhotosController', function ($scope, $rootScope, $http) {
  	$http.get('/data/content.json').success(function (data) { 
	   $rootScope.postData = data;

	    var allPosts = [];

	    for (var i = 0; i < data.posts.photos.length; i ++ ){
					allPosts.push(data.posts.photos[i]);
				}

			$scope.photoPosts = data.posts.photos;

	    });
  	});