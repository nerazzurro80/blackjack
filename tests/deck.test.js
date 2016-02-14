"use strict";

describe("deckService", function () {
    var deckService;

    beforeEach(module("myBlackjackApp"));

    beforeEach(inject(function (_deckService_) {
        deckService = _deckService_;
    }));

    it("new deck should have 52 cards", function () {
        var deck = deckService.getDeck(true);
        expect(deck.length).toBe(52);
    });

    it("drawing cards should remove it from deck", function () {
        var deck = deckService.getDeck(true);
        deckService.drawCard();
        expect(deck.length).toBe(51);
    });

    it("Deck has 13 cards for each suite heart", function () {
        var deck = deckService.getDeck(true);
        var suits = ['heart', 'diamond', 'spade', 'club'];

        let found = {};
        for (let suit of suits) {

            found[suit] = 0;

            // loop the deck
            for (let i=0; i<deck.length; i++) {
                if (deck[i].suit === suit) {
                    found[suit]++;
                }
            }

            expect(found[suit]).toBe(13);
        }

    });

    it("Deck has 4 cards for each value", function () {
        var deck = deckService.getDeck(true);
        var values = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];

        let found = {};
        for (let value of values) {

            found[value] = 0;

            // loop the deck
            for (let i=0; i<deck.length; i++) {
                if (deck[i].value === value) {
                    found[value]++;
                }
            }

            expect(found[value]).toBe(4);
        }

    });

});