/*
 * This the service that provides all method to interact with the Deck entity
 * It contains the instance of a deck, which is an array of cards and could be reused for different games
 * In this app it is used by the game service to handle a game
 */
app.factory("deckService", function() {

    let deck; // the deck, a cards array
    const suits = ["diamond", "club", "heart", "spade"]; // suits
    const values = {
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "jack": 10,
        "queen": 10,
        "king": 10,
        "ace": 11 // ace can have 1 or 11 as value according to total
    };

    return {

        /*
         * method that creates a new deck
         */
        createNew: function() {

            deck = [];

            for (let suit of suits) {
                for (let value of Object.keys(values)) {
                    deck.push({
                        value: value,
                        valueNum: values[value],
                        suit: suit
                    });
                }
            }

            return deck;

        },

        /*
         * returns the full deck status
         */
        getDeck: function(forceNew = false) {

            if (!deck || forceNew) {
                this.createNew();
                this.shuffle();
            }

            return deck;
        },

        /*
         * draw card
         */
        drawCard: function() {
           return deck.pop();
        },

        /*
         * method that shuffles a new deck
         */
        shuffle: function() {
            let newArr = [];
            while (deck.length) {
                let randomIndex = Math.floor(Math.random() * deck.length),
                    element = deck.splice(randomIndex, 1)
                newArr.push(element[0]);
            }
            deck = newArr;
        }
    };

});