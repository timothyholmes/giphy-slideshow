(function(){

	angular.module('giphyApp')

	.controller('SlideshowController', ['$scope', 'dataService', function($scope, dataService) {
		dataService.getData('http://api.giphy.com/v1/gifs/search?q=pugs&api_key=dc6zaTOxFJmzC', function(response){
			$scope.results = response.data.data;
		});
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