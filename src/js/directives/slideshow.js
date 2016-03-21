(function(){

	angular.module('giphyApp')

	.controller('SlideshowController', ['$scope', 'DataService', function($scope, DataService) {

		var _this = this;

		_this.query = 'pugs';
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
			_this.index = 0;
			promise(_this.query);
		};

		_this.search();

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