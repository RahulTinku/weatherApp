app.controller('weatherController', ['$scope','weatherServcie', function($scope, weatherServcie) {
	
	$scope.weatherData = [];
	$scope.cityName = [];
	$scope.today = new Date().toISOString().split('T')[0];

	$scope.getWeather = function() {
		weatherServcie.getWeather($scope.city).then(function(success){

				$scope.cityName.push(success.data.city.name);
				$scope.weatherData.push(success.data);
				console.log($scope.weatherData);
				
		}, function(error){
			console.log(error);
		});
	}

}]);