angular.module("shopModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Products";
            $scope.newProduct = {};

            $scope.addProduct = function () {
                $scope.products.push($scope.newProduct);
                $scope.newProduct = {};
                $scope.saveProducts();
            }
        }
    ]);