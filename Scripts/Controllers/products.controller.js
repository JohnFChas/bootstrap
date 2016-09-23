angular.module("shopModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Products";
        }
    ]);