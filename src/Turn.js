const Card = require('../src/Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.guessValue = undefined;
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.guessValue = true;
      return true
    } else {
      this.guessValue = false;
      return false
    }
  }

  giveFeedback() {
    if (this.guessValue === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
