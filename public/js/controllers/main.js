angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Catas','Contractors','$routeParams', function($scope, $http, Catas,Contractors,$routeParams) {
		$scope.cataData = {};

		$scope.contractorData = {};

		$scope.loading = true;

		// for listDetailView
        $scope.routeId=$routeParams.itemId;


		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Catas.get()
			.success(function(data) {
				$scope.catas = data;
				$scope.loading = false;
			});

	   // use the service to get all the contractors
		Contractors.get()
			.success(function(data) {
				$scope.contractors = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createCata = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.cataData.cata != undefined) {
				$scope.loadcataDataing = true;

				// call the create function from our service (returns a promise object)
				Catas.create($scope.cataData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.cataData = {}; // clear the form so our user is ready to enter another
						$scope.catas = data; // assign our new list of todos
					});
			}
		};


		// when submitting the add form, send the text to the node API
		$scope.createContractor = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.contractorData.contractor != undefined) {
				$scope.loadcataDataing = true;

				// call the create function from our service (returns a promise object)
				Contractors.create($scope.contractorData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.contractorData = {}; // clear the form so our user is ready to enter another
						$scope.contractors = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================


		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Catas.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.catas = data; // assign our new list of todos
				});
		};

        // delete a contractor after checking it
		$scope.deleteContractor = function(id) {
			$scope.loading = true;

			Contractors.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.contractors = data; // assign our new list of todos
				});
		};

	}]);