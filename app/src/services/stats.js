/*
 * This the service that stores games and can elaborate analytics and stats against them
 * For future developments, could store data server side so that they are available in future sessions
 */
app.factory("statsService", function() {

    var games = [];

    return {

        /*
         * add game
         */
        addGame: function(game) {
            games.push(game);
        },

        /*
         * return games
         */
        getGames: function() {
            return games;
        }

    };

});