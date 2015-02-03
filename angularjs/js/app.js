/**
 * Created by Danyang on 2/2/2015.
 */
(function() {
    "use strict";
    /**
     * Module
     * Module dependencies: 'store-directives'
     * @type {module}
     */
    var app = angular.module('gemStore', ['store-directives']);

    /**
     * Data load controller
     * Dependency Injection $http
     */
    app.controller('StoreController', ["$http", function($http){
        var store = this;
        store.products = [];
        $http.get("data/store-products.json").success(function(data){
            store.products = data;
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