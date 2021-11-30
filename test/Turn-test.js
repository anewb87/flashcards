const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(Turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess to the question', function() {
    const turn = new Turn('my guess');
    expect(Turn.guess).to.equal('my guess');
  });

  it('should store a Card object for the current card in play', function() {
    const card = new Card()
    const turn = new Turn('my guess', card)
    expect(Turn.card).to.equal(card)
  });



})


// Your Turn class should meet the following requirements:

// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
//***not sure if card object as parameter has been written correctly.

// returnGuess: method that returns the guess

// returnCard: method that returns the Card

// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card

// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
