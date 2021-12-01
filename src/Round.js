class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0]
  }

  returnCurrentCard() {
    console.log(this.deck)
    return this.currentCard
  }
}

module.exports = Round;
