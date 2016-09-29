angular.module("shopModule")
    .controller("AboutController", [
        "$scope",
        function ($scope) {
            $scope.jumbotron = {
                title: "About",
                content: "My content"
            };
        }
    ]);