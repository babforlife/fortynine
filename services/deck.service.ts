import { Deck, OfficialDeck } from './../models/deck.model'
import { Card } from '~/models/cards/card.model'

class DeckService {
  private deck = new Deck()

  init() {
    this.deck.cards = this.shuffle(new OfficialDeck().cards)
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

  draw(): Card | undefined {
    return this.deck.cards.pop()
  }
}
export const deckService = new DeckService()
