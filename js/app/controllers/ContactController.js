function ContactController($scope, $timeout) {
	$scope.name = 'Austin';
    $timeout(function(){
        $scope.name = 'Greg';
    },5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);