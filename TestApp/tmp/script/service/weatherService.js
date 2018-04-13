app.factory('weatherServcie',['$http', function($http) {

	return {
		getWeather : function(cityName) {
			return $http({
				method : 'GET',
				url : 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName
						+ '&appid=78cd473d16d4bbce10b44292e91f61a8&units=imperial'
			});
		}
	}
}]);