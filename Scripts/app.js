(function(){

	var app = angular.module("myApp",[]);

	/*app.service("DataPlayers", function(){

		this.info = function(){

			data = [
				{
					name:"Esneider"
				},
				{
					name:"Pedro"
				}
			];

			return data;
		}

	});*/

	app.controller("tablaController", function($scope, $http){

		$http.get("Data/tabla.json").then(function(response){

			$scope.players = response.data;

		});
		

	});

})();