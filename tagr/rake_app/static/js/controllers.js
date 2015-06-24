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
    app.controller('TagrController', ["$http", "$scope", "tagService", function($http, $scope, tagSvr){
        var vm = this;

        vm.keywords = null;
        vm.text = "Compatibility of systems of linear constraints over the set of natural numbers. Criteria of compatibility of a system of linear Diophantine equations, strict inequations, and nonstrict inequations are considered. Upper bounds for components of a minimal set of solutions and algorithms of construction of minimal generating sets of solutions for all types of systems are given. These criteria and the corresponding algorithms for constructing a minimal supporting set of solutions can be used in solving all the considered types of systems and systems of mixed types.";
        vm.tag = tag;

        function tag() {
            tagSvr.prepForBroadcast(vm.text);
            $scope.$on('tagReady', function() {
                vm.keywords = tagSvr.msg["keywords"];
            });
        }
    }]);

    app.factory('tagService', ["$http", "$rootScope", function($http, $rootScope) {
        var sharedService = {};
        sharedService.prepForBroadcast = prepForBroadcast;

        function prepForBroadcast(str) {
            $rootScope.$broadcast('prepForBroadcast');
            $http({
                method: 'POST',
                url: '/',
                data: {text: str}
            }).success(function(data) {
                sharedService.msg = data;
                $rootScope.$broadcast('tagReady');
            });
        }

        return sharedService;
    }]);
})();