import { Card } from '~/models/cards/card.model'

export class DisplayCard {
  card = new Card()
  play = 'false'

  constructor(displayCard: Partial<DisplayCard> = {}) {
    Object.assign(this, displayCard)
  }
}
