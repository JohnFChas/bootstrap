angular.module("shopModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true
                })

                .when("/Products", {
                    templateUrl: "Views/Products.html",
                    controller: "ProductsController",
                    caseInsensitiveMatch: true
                })

                .when("/Products/:id", {
                    templateUrl: "Views/Product.html",
                    controller: "ProductController",
                    caseInsensitiveMatch: true
                });
        }
    ]);