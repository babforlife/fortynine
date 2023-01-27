import { Card } from '~/models/card.model'

class FieldService {
  private virus!: Card
  private dopage!: Card
  private epidemie!: Card

  setVirus(card: Card) {
    if (card.group !== 'Virus') return console.warn(`Cannot apply ${card.group} on virus group`)
    this.virus = card
  }

  getVirus(): Card {
    return this.virus || undefined
  }

  setDopage(card: Card) {
    // if (card.group !== 'Dopage') return console.warn(`Cannot apply ${card.group} on dopage group`)
    this.dopage = card
  }

  getDopage(): Card {
    return this.dopage || undefined
  }

  setEpidemie(card: Card) {
    // if (card.group !== 'Epidemie') return console.warn(`Cannot apply ${card.group} on epidemie group`)
    this.epidemie = card
  }

  getEpidemie(): Card {
    return this.epidemie || undefined
  }

  applyEffect() {
    if (this.virus === undefined) return
    this.virus.effect()
  }
}
export const fieldService = new FieldService()
