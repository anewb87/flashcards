const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[this.turns] || 0;
    this.incorrectGuesses = [];
    this.currentTurn = undefined;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    this.turns++
    this.currentCard = this.deck.cards[this.turns];
    return this.currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    let numCorrect = this.turns - this.incorrectGuesses.length;
    return numCorrect / this.turns * 100
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
    return (`**Round over!** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
  }
}

module.exports = Round;
