import { Card } from '~/models/card.model'
import { Deck } from '~/models/deck.model'
import * as data from '~/models/set1.json'

class DeckService {
  private deck = new Deck()
  private deckLocation = 'models/test.json'

  constructor() {
    this.init()
  }

  init() {
    const cards = data.cards.map((card) => new Card(card))
    this.deck.cards = this.shuffle(cards)
    console.log('deck:', this.deck)
  }

  shuffle(cards: Card[]): Card[] {
    let currentIndex = cards.length

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]]
    }

    return cards
  }
}
export const deck = new DeckService()
