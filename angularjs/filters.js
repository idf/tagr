/**
 * Created by Danyang on 2/4/2015.
 */
(function(){
    'use strict';
    var app = angular.module('filters', []);

    /**
     * Avoid auto escape of html
     *
     * Usage:
     * <div ng-bind-html="something_with_html_tags | sanitize"></div>
     */
    app.filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }]);

    app.filter("reverse", function() {
       return function(text) {
           return text.split("").reverse().join("");
       };
    });
})();