/**
 * Created by Danyang on 2/5/2015.
 */
(function() {
    "use strict";
    /**
     * Module
     * Module dependencies: 'store-directives'
     * @type {module}
     */
    var app = angular.module('app.controllers', []);

    /**
     * Data load controller
     * Dependency Injection $http
     */
    app.controller('StoreController', ["$http", function($http){
        var vm = this;
        vm.products = [];
        $http.get("data/store-products.json").success(function(data){
            vm.products = data;
        });
    }]);

    /**
     * submission review handler
     */
    app.controller('ReviewController', function() {
        this.review = {};
        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();