(function(){

	angular.module('giphyApp')

	.controller('SlideshowController', ['$scope', 'DataService', function($scope, DataService) {

		$scope.query = 'pugs';
		$scope.results = [];
		
		var  promise = function(path) {
			DataService.getGifs(path)
			.then(function(response) {
				if(response.data.length != null) {
					$scope.results = response.data;
				} else {
					$scope.results = [];
				}
			}, function(error) {
				console.log('error\n' + error);
			});
		};

		$scope.search = function() {
			$scope.index = 0;
			promise($scope.query);
		};

		$scope.search();

    }])
    
    .directive('thSlideshow', function () {

    	var directiveDefinitionObject = {
			restrict: 'E',
			templateUrl: './templates/slideshow.html',
			controller: 'SlideshowController',
			controllerAs: 'sldshwCtrl'
		};

		return directiveDefinitionObject;
	})
})();