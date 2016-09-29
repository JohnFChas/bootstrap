angular.module("shopModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Home";

            $scope.carouselImages = [];

            for (var i = 0; i < 5; i++) {
                $scope.carouselImages.push({
                    url: "http://placehold.it/1920x500",
                    alt: "Alt text",
                    caption: {
                        header: "Header",
                        body: "Body"
                    }
                });
            }
        }
    ]);