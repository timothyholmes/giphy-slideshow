(function(){

	angular.module('giphyApp')

	/**
	 * @name SlideshowController
	 *
	 * @description Controller for the slideshow directive
	 */
	.controller('SlideshowController', ['$scope', 'DataService', function($scope, DataService) {

		/**
		 * @name  _this
		 */
		var _this = this;

		/**
		 * @name  $scope.query
		 * 
		 * @description The keyword to be searched
		 */
		$scope.query = 'pugs';

		/**
		 * @name results
		 * 
		 * @type {Array}
		 *
		 * @description results of the search
		 */
		_this.results = [];

		/**
		 * @name promise
		 *
		 * @description Calls data service with query
		 * 
		 * @param {String} searchTerm [Search term for query]
		 */
		_this.promise = function(searchTerm) {
			DataService.getGifs(searchTerm)
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

		/**
		 * @name search
		 * 
		 * @description Resets the slide show and updates the content with the
		 *              results from a new query.
		 */
		_this.search = function() {
			_this.results = [];
			_this.index = 0;
			_this.promise($scope.query);
		};

		/**
		 * @name $watch
		 * 
		 * @description Watch function to update results when the query is changed.
		 */
		$scope.$watch("query", function() {
			_this.search();
		});

		/**
		 *	Initial call to search the default search term.
		 */
		_this.search();

    }])
    
    /**
     * @name thSlideshow
     *
     * @description Creates GIF slideshow
     *
     * @return {Object} [Directive Definition Object]
     */
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