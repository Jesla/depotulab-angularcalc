var controllers = angular.module("angularCalculator", []);
controllers.controller("angularCalcController", ["$scope", function($scope) {

    $scope.plusButton = function(operand1, operand2) {
        if (operand1 === undefined || operand2 === undefined) {
            alert("Please enter a number in each field.");
        } else {
        $scope.result = ("The result of adding " + operand1 + " and " + operand2 + " is " + ($scope.operand1 + $scope.operand2) + ".");
        }
        $scope.operand1 = undefined;
        $scope.operand2 = undefined;
    };

    $scope.subtractButton = function(operand1, operand2) {
        if (operand1 === undefined || operand2 === undefined) {
            alert("Please enter a number in each field.");
        } else {
        $scope.result = ("The result of subtracting " + operand1 + " and " + operand2 + " is " + ($scope.operand1 - $scope.operand2) + ".")
        }
        $scope.operand1 = undefined;
        $scope.operand2 = undefined;
    };

    $scope.multiplyButton = function (operand1, operand2) {
        if (operand1 === undefined || operand2 === undefined) {
            alert("Please enter a number in each field.");
        } else {
        $scope.result = ("The result of multiplying " + operand1 + " and " + operand2 + " is " + ($scope.operand1 * $scope.operand2) + ".")
        }
        $scope.operand1 = undefined;
        $scope.operand2 = undefined;
    };

    $scope.divideButton = function (operand1, operand2) {
        if (operand1 === undefined || operand2 === undefined) {
            alert("Please enter a number in each field.");
        } else if (operand2 === 0) {
            alert("You cannot divide by 0. Please try again.");
        } else {
        $scope.result = ("The result of divide " + operand1 + " and " + operand2 + " is " + ($scope.operand1 / $scope.operand2) + ".")
        }
        $scope.operand1 = undefined;
        $scope.operand2 = undefined;
    };

}]);
