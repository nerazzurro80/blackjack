/*
 * This the service that stores games and can elaborate analytics and stats against them
 * For future developments, could store data server side so that they are available in future sessions
 * At the moment data is stored on local storage to preserve history on browser reload
 */
app.factory("statsService", function() {

    let games = localStorage["games"] ? JSON.parse(localStorage["games"]) : [];
    let stats = {};
    updateStats();

    return {
        /*
         * add game
         */
        addGame: function(game) {
            games.push(game);
            localStorage["games"] = JSON.stringify(games);
            updateStats();
        },

        /*
         * return games
         */
        getGames: function() {
            return games;
        },

        /*
         * return stats
         */
        getStats: function() {
            return stats;
        }


    };

    // private method
    /*
     * function that updates stats
     */
    function updateStats() {

        stats = {
            dealerWins: 0,
            playerWins: 0,
            timeSpent: 0
        };

        for (var game of games) {
            if (game.winner === 'DEALER') {
                stats.dealerWins++;
            } else {
                stats.playerWins++;
            }

            // time spent actually in a game, idle time not counted
            stats.timeSpent += (game.finishedAt - game.startedAt);

        }
        console.log(stats);
    }

});