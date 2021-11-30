const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess to the question', function() {
    const turn = new Turn('user guess');
    expect(turn.guess).to.equal('user guess');
  });

  it('should store a Card object for the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('user guess', card);
    expect(turn.card).to.equal(card);
  });

  it('should be able to return the user guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('user guess', card);
    turn.returnGuess();
    expect(turn.returnGuess()).to.deep.equal('user guess');
  });

  it('should be able to return the Card object for the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('user guess', card);
    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal(card)
  });

  it('should return true when the user guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.deep.equal(true)
  });

  it('should return false when the user guess is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.deep.equal(false)
  });

  it('should notify the user when they answer correctly', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.deep.equal(true);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.deep.equal('correct!')
  });

  it('should notify the user when they answer incorrectly', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.deep.equal(false);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.deep.equal('incorrect!')
  });
});
