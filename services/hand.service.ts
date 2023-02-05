import { emit } from 'shuutils'
import { ModalConfiguration } from './../models/modal-configuration.model'
import { pileService, deckService, fieldService } from '~/services'
import { Card } from '~/models'

class HandService {
  cards: Card[] = []

  draw() {
    while (this.cards.length !== 5) this.cards.push(deckService.draw()!)
    this.send()
  }

  playCard(card: Card) {
    this.removeCard(card)
    if (fieldService.isField(card)) fieldService.setField(card)
    else pileService.add(card)
    this.draw()
  }

  removeCard(card: Card) {
    const cardIndex = this.cards.findIndex((c) => c.description === card.description)
    if (cardIndex > -1) this.cards.splice(cardIndex, 1)
  }

  send() {
    emit('draw')
  }
}
export const handService = new HandService()
