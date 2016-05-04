angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Catas', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/catas');
			},
			create : function(todoData) {
				return $http.post('/api/catas', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/catas/' + id);
			}
		}
	}])

	.factory('Contractors', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/contractors');
			},
			create : function(contractorData) {
				return $http.post('/api/contractors', contractorData);
			},
			delete : function(id) {
				return $http.delete('/api/contractors/' + id);
			}
		}
	}]);