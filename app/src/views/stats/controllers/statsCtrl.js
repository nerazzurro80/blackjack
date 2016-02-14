app.controller("statsCtrl", function($scope, $location, statsService) {

    $scope.games = statsService.getGames();

    $scope.back = function() {
        $location.path('/lobby');
    }

});