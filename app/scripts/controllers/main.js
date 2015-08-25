'use strict';

/**
 * @ngdoc function
 * @name simplySocial.controller:MainController
 * @description
 * # MainController
 * Controller of the simplySocial
 */
angular.module('simplySocial')
  .controller('MainController', function ($scope, $rootScope, $http, $anchorScroll, $location) {
  	 $http.get('/data/content.json').success(function (data) { 
	    $rootScope.postData = data;
	    
	    var allPosts = [];

				for (var a = 0; a < data.posts.text.length; a ++ ){
					allPosts.push(data.posts.text[a]);
				}
				for (var b = 0; b < data.posts.photos.length; b ++ ){
					allPosts.push(data.posts.photos[b]);
				}
				for (var c = 0; c < data.posts.videos.length; c ++ ){
					allPosts.push(data.posts.videos[c]);
				}

			$scope.allPosts = allPosts;

			$scope.photoPosts = data.posts.photos;

			$scope.videoPosts = data.posts.videos;

		  $scope.scrollTo = function(id) {
	      $location.hash(id);
	      $anchorScroll();
		   };

	    });
	});