const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentTurn;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.currentCard = this.deck.cards[this.turns];
    this.currentTurn = new Turn(guess, this.currentCard);
    if (this.currentTurn.evaluateGuess() === false) {
        this.incorrectGuesses.push(this.currentCard.id)
    }
    this.turns++
  }
}

module.exports = Round;
