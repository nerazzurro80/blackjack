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

});