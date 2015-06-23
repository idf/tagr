/**
 * Created by Danyang on 2/3/2015.
 */
(function() {
    "use strict";
    var app = angular.module('app.directives', []);

    app.directive("productDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
    });
})();
