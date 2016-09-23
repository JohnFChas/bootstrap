angular.module("shopModule")
    .controller("MainController", [
        "$scope",
        function ($scope) {
            $scope.products = [];

            $scope.loadProducts = function () {
                var dataString = localStorage.getItem("products");

                if (dataString)
                    $scope.products = JSON.parse(dataString);
            }

            $scope.saveProducts = function () {
                var jsonString = JSON.stringify($scope.products);
                localStorage.setItem("products", jsonString);
            }
        }
    ]);