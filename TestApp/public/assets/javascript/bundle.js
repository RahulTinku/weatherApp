var app = angular.module('weatherApp',[]);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXIvd2VhdGhlckN0cmwuanMiLCJzZXJ2aWNlL3dlYXRoZXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2VhdGhlckFwcCcsW10pOyIsImFwcC5jb250cm9sbGVyKCd3ZWF0aGVyQ29udHJvbGxlcicsIFsnJHNjb3BlJywnd2VhdGhlclNlcnZjaWUnLCBmdW5jdGlvbigkc2NvcGUsIHdlYXRoZXJTZXJ2Y2llKSB7XG5cdFxuXHQkc2NvcGUud2VhdGhlckRhdGEgPSBbXTtcblx0JHNjb3BlLmNpdHlOYW1lID0gW107XG5cdCRzY29wZS50b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG5cdCRzY29wZS5nZXRXZWF0aGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0d2VhdGhlclNlcnZjaWUuZ2V0V2VhdGhlcigkc2NvcGUuY2l0eSkudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcblxuXHRcdFx0XHQkc2NvcGUuY2l0eU5hbWUucHVzaChzdWNjZXNzLmRhdGEuY2l0eS5uYW1lKTtcblx0XHRcdFx0JHNjb3BlLndlYXRoZXJEYXRhLnB1c2goc3VjY2Vzcy5kYXRhKTtcblx0XHRcdFx0Y29uc29sZS5sb2coJHNjb3BlLndlYXRoZXJEYXRhKTtcblx0XHRcdFx0XG5cdFx0fSwgZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cbn1dKTsiLCJhcHAuZmFjdG9yeSgnd2VhdGhlclNlcnZjaWUnLFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xuXG5cdHJldHVybiB7XG5cdFx0Z2V0V2VhdGhlciA6IGZ1bmN0aW9uKGNpdHlOYW1lKSB7XG5cdFx0XHRyZXR1cm4gJGh0dHAoe1xuXHRcdFx0XHRtZXRob2QgOiAnR0VUJyxcblx0XHRcdFx0dXJsIDogJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JyArIGNpdHlOYW1lXG5cdFx0XHRcdFx0XHQrICcmYXBwaWQ9NzhjZDQ3M2QxNmQ0YmJjZTEwYjQ0MjkyZTkxZjYxYTgmdW5pdHM9aW1wZXJpYWwnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1dKTsiXX0=
