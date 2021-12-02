const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?',
      ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',
      ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('yellow');
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should start with 2 turns', function() {
    expect(round.turns).to.equal(2);
  });

  it('should be able to store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([2]);
  });

  it('should have a takeTurn method that updates the turn count after each guess', function() {
    expect(round.turns).to.equal(2);
  });

  it('should have a takeTurn method that instantiates Turn', function() {
    expect(round.currentTurn).to.be.an.instanceof(Turn);
  });

  it('should have the next card become the current card', function() {
    expect(round.currentCard).to.equal(card3);
  });

  it('should evaluate the guess', function() {
    expect(round.currentTurn.evaluateGuess()).to.equal(false);
  });

  it('should store incorrect guesses via id in an array of incorrectGuesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([2]);
  });

  it('should tell the user when they have given an answer', function() {
    expect(round.currentTurn.giveFeedback()).to.equal('incorrect!');
  });

  it('should calculate the percentage of correct answers', function() {
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should let the user know the round is over and gives them their percentage of correct answers', function() {
    expect(round.endRound()).to.equal(`**Round over!** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`);
  });
})
