const data = require('./data');
const util = require('./util');
const prototypeQuestions = data.prototypeData;

const Round = require('./Round');
const Card = require('./Card');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = undefined;
  }

  start() {
    let cards = prototypeQuestions.map(function(card) {
      return new Card (card.id, card.question, card.answers, card.correctAnswer);
    });
    this.deck = new Deck (cards);
    this.round = new Round (this.deck);
    this.currentRound = this.round;
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
