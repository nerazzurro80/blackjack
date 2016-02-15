app.controller("lobbyCtrl", function($scope, $location, gameService) {

    $scope.newGame = function() {
        $scope.game = gameService.newGame();
    }

    $scope.drawCard = function() {
        gameService.drawCard();
    }

    $scope.stand = function() {
        gameService.stand();
    }

    $scope.split = function() {
        gameService.split();
    }

    $scope.viewStats = function() {
        $location.path( "/stats" );
    }

    // watch game changes to set button states
    $scope.$watch(function() {
        return $scope.game && $scope.game.completed;
    }, function() {
        // variable that defines if we are in middle of a game
        $scope.inGame = $scope.game && !$scope.game.completed;
    });

});