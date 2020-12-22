angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;
			
		});
	}])
	.controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.json').success(function(data){
			$scope.page = data[$routeParams.id];
		});
		
	}])
	
	}]);