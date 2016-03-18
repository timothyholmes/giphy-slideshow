(function(){

	angular.module('giphyApp')

	.controller('SlideshowController', ['$scope', 'DataService', function($scope, DataService) {

		$scope.query = 'pugs';

		var path = 'http://api.giphy.com/v1/gifs/search?q=pugs&api_key=dc6zaTOxFJmzC';
		
		var  promise = function() {
			DataService.getGifs(path)
			.then(function(response) {
				if(response.data.length != null) {
					$scope.results = response.data;
				} else {
					$scope.results = response.data;
				}
			}, function(error) {
				console.log('error\n' + error);
			});
		};

		promise();

    }])
    
    .directive('thSlideshow', function () {

    	var link = function (scope, ele, attrs) {
			
	    };

    	var directiveDefinitionObject = {
			restrict: 'E',
			templateUrl: '../templates/slideshow.html',
			controller: 'SlideshowController',
			controllerAs: 'sldshwCtrl',
			scope: {},
			link: link
		};

		return directiveDefinitionObject;
	})
})();