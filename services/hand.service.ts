import { pileService } from './pile.service'
import { deckService } from './deck.service'
import { fieldService } from './field.service'
import { Card } from '~/models/cards/card.model'
import { Hand } from '~/models'

class HandService {
  hand = new Hand()

  draw() {
    while (this.hand.cards.length !== 5) this.hand.cards.push(deckService.draw()!)
  }

  playCard(card: Card) {
    this.removeCard(card)
    if (fieldService.isField(card)) fieldService.setField(card)
    else pileService.add(card)
    this.draw()
  }

  removeCard(card: Card) {
    const cardIndex = this.hand.cards.indexOf(card)
    if (cardIndex > -1) this.hand.cards.splice(cardIndex, 1)
  }
}
export const handService = new HandService()
