angular.module("shopModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";
        }
    ]);