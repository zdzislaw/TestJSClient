var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('formCtrl', function($scope) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});


var accountRegisterLogin = angular.module('myApp', ['ui.bootstrap']);
accountRegisterLogin.controller('AccountRegisterController', function($scope){
    
    
});