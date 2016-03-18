(function() {

	'use strict';

	angular.module('giphyApp')
	
	.factory('DataService', function ($http, $q) {
		return {
			getGifs: function(path) {
				return $http.get(path)
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