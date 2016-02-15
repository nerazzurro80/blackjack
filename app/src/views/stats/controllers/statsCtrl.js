app.controller("statsCtrl", function($scope, $location, statsService) {

    $scope.games = statsService.getGames();
    $scope.stats = statsService.getStats();

    $scope.back = function() {
        $location.path('/lobby');
    }

});