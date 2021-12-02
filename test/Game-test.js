const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');

describe('Game', function() {
  let game;
  let cards;

  beforeEach(function() {
    game = new Game;
    cards = prototypeQuestions;
  });

  it('should be an instance of Round', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.equal(undefined);
  });

  it('should have a start method that creates Cards', function() {
    game.start();
    expect(game).to.have.a.property('deck');
  });

  it('should put Cards in a Deck', function() {
    game.start();
    expect(game.deck.cards).to.deep.equal(cards);
  });

  it('should create a new Round using the Deck', function() {
    game.start();
    expect(game.round.deck.cards).to.deep.equal(cards);
  });
})
