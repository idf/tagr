/**
 * DEPENDENCY: bower_components/oauth-js/dist/oauth.js
 */
(function() {
    'use strict';

    var app = angular.module("oauth-services", []);

    /**
     * Interface to oauth.io

     Usage:
     // Initialize
        oauthService.initialize("instagram");

     // Auth
        if(oauthService.isReady()) {loc2geocode(query, true);}
        else {oauthService.connect("instagram").then(function () {...});}

     // Get Token
        oauthService.getAccessToken()
     */
    app.factory('oauthService', function($q) {
        var oauthService = false;
        return {
            initialize: function(appName) {
                //initialize OAuth.io with public key of the application
                OAuth.initialize('421nwYiF8fdQ56TiNC8QSn2gm-Q', {cache:true});
                //try to create an authorization result when the page loads, this means a returning user won't have to click the twitter button again
                oauthService = OAuth.create(appName);
            },
            isReady: function() {
                return (oauthService);
            },
            connect: function(appName) {
                var deferred = $q.defer();
                OAuth.popup(appName, {cache:true}, function(error, result) { //cache means to execute the callback if the tokens are already present
                    if (!error) {
                        oauthService = result;
                        deferred.resolve();
                    } else {
                        console.log("error in oauth");
                        console.log(error);
                    }
                });
                return deferred.promise;
            },
            clearCache: function(appName) {
                OAuth.clearCache(appName);
                oauthService = false;
            },
            getAccessToken: function () {
                return oauthService.access_token;
            }
        };
    });
})();