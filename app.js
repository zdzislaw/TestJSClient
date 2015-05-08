var app = angular.module('FormRegister', ['ui.bootstrap']);
	app.controller('FormRegisterController', ['$scope', function($scope){	
}]);


var accountRegisterLogin = angular.module('AccountRegisterLogin', ['ui.bootstrap']);
var teste;
accountRegisterLogin.controller('AccountRegisterController', ['$scope', function($scope){    
    $scope.user = {userName: 'Zdzislaw', email: 'zdzislaw.k@hotmail.com'};
	$scope.email = 'teste';	
	
	$scope.submit = function submit(user) {
		teste = user;
	};
}]);

