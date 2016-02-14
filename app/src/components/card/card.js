app.component('card', {
    bindings: {
        value: '='
    },
    controllerAs: 'cardCtrl',
    controller: function($timeout, $scope) {

        $scope.contentShown = false;

        $timeout(function() {
            $scope.contentShown = true;
        }, 250);

    },
    templateUrl: 'app/src/components/card/card.html',
});