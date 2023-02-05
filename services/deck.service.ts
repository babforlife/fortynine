import { Card, Deck, OfficialDeck } from '~/models'
import { shuffleArray } from '~/utils'

class DeckService {
  private deck = new Deck()

  init() {
    this.deck.cards = new OfficialDeck().cards
    shuffleArray(this.deck.cards)
  }

  draw(): Card | undefined {
    return this.deck.cards.pop()
  }
}
export const deckService = new DeckService()
