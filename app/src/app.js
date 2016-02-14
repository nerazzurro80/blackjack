// create app
var app = angular.module("myBlackjackApp", [
    'ngRoute'
]);

// configure app
app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/lobby', {
                templateUrl: 'app/src/views/lobby/templates/lobby.html',
                controller: 'lobbyCtrl'
            })
            .when('/stats', {
                templateUrl: 'app/src/views/stats/templates/stats.html',
                controller: 'statsCtrl'
            })
            .otherwise({
                redirectTo: '/lobby'
            });

    }]);



