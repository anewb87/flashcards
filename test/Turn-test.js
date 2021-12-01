const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn;
  let card;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object');
    turn = new Turn('guess', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess to the question', function() {
    expect(turn.guess).to.equal('guess');
  });

  it('should store a Card object for the current card in play', function() {
    expect(turn.card).to.equal(card);
  });

  it('should be able to return the user guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('should be able to return the Card object for the current card in play', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true when the user guess is correct', function() {
    const turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false when the user guess is incorrect', function() {
    const turn = new Turn('array', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should notify the user when they answer correctly', function() {
    const turn = new Turn('object', card);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('correct!');
  });

  it('should notify the user when they answer incorrectly', function() {
    const turn = new Turn('array', card);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
