import { emit } from 'shuutils'
import { Card } from '~/models'

class PileService {
  pile: Card[] = []

  add(card: Card) {
    this.pile.push(card)
    emit('push-to-pile', card)
  }
}
export const pileService = new PileService()
