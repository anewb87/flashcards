// const Turn = require('../src/Turn');
const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.currentTurn;

  }

  returnCurrentCard() {
    // console.log(this.deck)
    return this.currentCard
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard)
    this.turnCount++
  }
}

module.exports = Round;
