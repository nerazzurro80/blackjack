"use strict";

describe("gameService", function () {
    var gameService;

    beforeEach(module("myBlackjackApp"));

    beforeEach(inject(function (_gameService_) {
        gameService = _gameService_;
    }));

    it("new game has 2 players", function () {
        var game = gameService.newGame();
        expect(Object.keys(game.players).length).toBe(2);
    });

    it("ace is giving value of 11 if not busting", function () {
        var cards = [{
            value: 'ace',
            valueNum: 11
        }, {
            value: 'ten',
            valueNum: 10
        }
        ];

        expect(gameService.countPoints(cards)).toBe(21);
    });

    it("ace is giving value of 1 if busting", function () {
        var cards = [{
            value: 'ace',
            valueNum: 11
        }, {
            value: 'ten',
            valueNum: 10
        }, {
            value: 'nine',
            valueNum: 9
        }
        ];

        expect(gameService.countPoints(cards)).toBe(20);
    });

});