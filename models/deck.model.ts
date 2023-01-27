import { Card } from './card.model'

export class Deck {
  cards: Card[] = []

  constructor(deck: Partial<Deck> = {}) {
    Object.assign(this, deck)
  }
}
