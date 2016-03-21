(function(){

	angular.module('giphyApp')

	.controller('SlideshowController', ['$scope', 'DataService', function($scope, DataService) {

		var _this = this;

		$scope.query = 'pugs';
		_this.results = [];
		
		var promise = function(path) {
			DataService.getGifs(path)
			.then(function(response) {
				if(response.data.length != null) {
					_this.results = response.data;
				} else {
					_this.results = [];
				}
			}, function(error) {
				console.log('error\n' + error);
			});
		};

		_this.search = function() {
			_this.results = [];
			_this.index = 0;
			promise($scope.query);
		};

		_this.search();

		$scope.$watch("query", function(newValue, oldValue) {
			_this.search();
		});

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