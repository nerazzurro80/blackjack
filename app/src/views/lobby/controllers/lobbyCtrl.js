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

    $scope.viewStats = function() {
        $location.path( "/stats" );
    }

});