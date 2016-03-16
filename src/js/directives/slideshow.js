(function(){

	angular.module('giphyApp')

	.controller('SlideshowController', ['$scope', 'dtMgr', function($scope, dataManager) {
		
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