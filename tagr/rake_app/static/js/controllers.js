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
    app.controller('TagrController', ["$http", function($http){
        var vm = this;

        vm.keywords = [];
        vm.text = "Compatibility of systems of linear constraints over the set of natural numbers. Criteria of compatibility of a system of linear Diophantine equations, strict inequations, and nonstrict inequations are considered. Upper bounds for components of a minimal set of solutions and algorithms of construction of minimal generating sets of solutions for all types of systems are given. These criteria and the corresponding algorithms for constructing a minimal supporting set of solutions can be used in solving all the considered types of systems and systems of mixed types.";
        vm.tag = function() {
            $http.post("/").success(function(data){
                vm.keywords = data;
            });
        }
    }]);
})();