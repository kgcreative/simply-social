var allPosts = [];

for (var i = 0; i < posts.text.length; i ++ ){
	allPosts.push(posts.text[i]);
}
for (var i = 0; i < posts.photos.length; i ++ ){
	allPosts.push(posts.photos[i]);
}
for (var i = 0; i < posts.videos.length; i ++ ){
	allPosts.push(posts.videos[i]);
}

$scope.allPosts = allPosts;