/*
 * This the service that provides all method to interact with the Deck entity
 * It contains the instance of a deck, which is an array of cards
 */
app.factory("gameService", function($timeout, deckService, statsService) {

    // this contains all the game data, it will be referenced in the controller
    // so that all changes to this object will be reflected in UI

    var game = {};
    var dealer;
    var currPlayer;
    var dealerThinkingTimeout;

    return {
        /*
         * creates a new game
         */
        newGame: function() {
            game = {
                deck: deckService.getDeck(true),
                players: {
                    'DEALER': {
                        cards: [],
                        points: 0,
                        turnComplete: false,
                        busted: false
                    },
                    'PLAYER 1': {
                        cards: [],
                        points: 0,
                        turnComplete: false,
                        busted: false
                    }
                },
                completed: false,
                currentPlayer: 'PLAYER 1',
                winner: null,
                startedAt: Date.now(),
                finishedAt: null,
            };

            // add references to players
            currPlayer = game.players[game.currentPlayer];
            dealer = game.players['DEALER'];

            // initial draw
            this.drawCard('PLAYER 1', 2);
            this.drawCard('DEALER', 1);

            return game;
        },

        /*
         * This is the method called when an user calls for another card
         * It checks if user busts, if so turn goes to next plater
         */
        drawCard: function(player = game.currentPlayer, num = 1) {

            for (let i=0; i<num; i++) {
                let card = deckService.drawCard();
                game.players[player].cards.push(card);
            }

            var points = this.countPoints(game.players[player].cards);
            game.players[player].points = points;

            if (points >= 21) {
                game.players[player].turnComplete = true;
                game.players[player].busted = points>21 ? true : false;
                this.dealerPlays();
            }

        },

        /*
         * This function is called when user stands
         */
        stand: function(player = game.currentPlayer) {
            game.players[player].turnComplete = true;
            this.dealerPlays();
        },

        /*
         * This function is called when have to change user turn
         * draw another card for dealer in these scenarios:
         * - the current player has more points than dealer
         * - dealer didn't bust yet
         * - so far dealer has just one card
         */
        dealerPlays: function() {

            var self = this;
            if ( (!currPlayer.busted && (currPlayer.points>dealer.points && !dealer.busted)) || dealer.cards.length === 1) {

                if (dealer.cards.length === 1) {
                    // set a timeout on the next action (to pretend dealer is thinking and give more interesting wait)
                    dealerThinkingTimeout = $timeout(function() {
                        self.drawCard('DEALER');
                        self.dealerPlays();
                    });
                } else {

                    // dealer is thinking
                    dealer.thinking = true;

                    // random waiting time for dealer (between 1 and 2 seconds)
                    var waitingTime = Math.random() * (3000 - 2000) + 2000;

                    // set a timeout on the next action (to pretend dealer is thinking and give more interesting wait)
                    dealerThinkingTimeout = $timeout(function() {
                        self.drawCard('DEALER');
                        self.dealerPlays();
                    }, waitingTime);
                }

            } else {
                // check winner if dealer completed its gaming (timeout to reveal winner after card animation finished)
                $timeout(function() {
                    self.checkWinner();
                    dealer.thinking = false;
                }, 1000)
            }

        },

        /*
         *  This function determines the winner
         */
        checkWinner: function() {
            if (game.completed) {
                return;
            }

            if (!currPlayer.busted && (currPlayer.points>dealer.points || dealer.busted ) ) {
                game.winner = game.currentPlayer;
            } else {
                game.winner = 'DEALER';
            }
            game.completed = true;
            game.finishedAt = Date.now();

            // add this game to stats
            statsService.addGame(game);
        },

        /*
         * This function counts the points of a given array of cards
         */
        countPoints: function(cards) {
            let points = 0;
            let acesFound = 0;

            for (let i in cards) {
                points += cards[i].valueNum;

                if (cards[i].value === 'ace') {
                    acesFound++;
                }
            }

            // if aces where found, remove 10 if busting
            while (acesFound && points>21) {
                points -= 10;
                acesFound--;
            }

            return points;
        }

    };


});