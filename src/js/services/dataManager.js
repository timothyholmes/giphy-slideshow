(function() {

	'use strict';

	angular.module('giphyApp')
	
	.service('dataService', function($http){
		this.getData = function(path, callback) {
			$http.get(path).then(callback)
		};
	});
	
})();