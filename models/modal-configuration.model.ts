import { Card } from './cards/card.model'

export type ModalContext = 'display-card' | 'drink-selection' | ''

export class ModalConfiguration {
  active = true
  card?: Card = undefined
  context: ModalContext = ''
  drinks = 0
  isButton = false

  constructor(config: Partial<ModalConfiguration> = {}) {
    Object.assign(this, config)
  }

  hide() {
    this.active = false
    this.card = undefined
    this.context = ''
    this.drinks = 0
    this.isButton = false
  }
}
