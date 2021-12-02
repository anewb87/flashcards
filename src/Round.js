const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
    this.currentTurn = undefined;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck.cards[this.turns];
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentTurn.giveFeedback();
    this.turns++
  }

  calculatePercentCorrect() {
    let numCorrect = this.turns - this.incorrectGuesses.length;
    return numCorrect / this.turns * 100
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }
}

module.exports = Round;
