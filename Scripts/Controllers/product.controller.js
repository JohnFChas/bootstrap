angular.module("shopModule")
    .controller("ProductController", [
        "$scope",
        function ($scope) {
            $scope.title = "Product";
        }
    ]);