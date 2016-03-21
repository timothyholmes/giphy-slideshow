(function() {

	'use strict';

	angular.module('giphyApp')
	
	.factory('DataService', function ($http, $q) {
		return {
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