(function() {

	'use strict';

	angular.module('giphyApp')
	
	.factory('DataService', function ($http, $q) {
		return {
			/**
			 * @name getGifs
			 *
			 * @description Queries the api with a given keyword and returns the results.
			 * 
			 * @param  {String} args [Keyword for the query builder]
			 * 
			 * @return {Object} [Return response of the query]
			 */
			getGifs: function(args) {
				return $http.get('http://api.giphy.com/v1/gifs/search?q=' + args + '&api_key=dc6zaTOxFJmzC')
				.then(function(response) {
					if (typeof response.data === 'object') {
						return response.data;
					} else {
						return $q.reject(response.data);
					}
				}, function(response) {
					return $q.reject(response.data);
				});
			}
		};
	});
})();