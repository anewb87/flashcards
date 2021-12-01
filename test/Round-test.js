const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Turn');
const Deck = require('../src/Deck')
const Turn = require('../src/Turn');

describe('Round', function() {
  let round;

  beforeEach(function() {
    round = new Round();
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round)
  });

  it('should return the current card being played', function() {
    
  });

})



// returnCurrentCard: method that returns the current card being played
// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
//
// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
