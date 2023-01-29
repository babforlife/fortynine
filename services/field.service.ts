import { emit } from 'shuutils'
import { pileService } from './pile.service'
import { Card } from '~/models/cards/card.model'

class FieldService {
  virus: Card | undefined
  dopage: Card | undefined
  epidemie: Card | undefined

  isField(card: Card) {
    return card.group === 'Virus' || card.group === 'Dopage' || card.group === 'Epidemie'
  }

  setField(card: Card) {
    if (card.group === 'Virus') return this.setVirus(card)
    if (card.group === 'Dopage') return this.setDopage(card)
    if (card.group === 'Epidemie') this.setEpidemie(card)
  }

  setVirus(card: Card) {
    if (this.virus !== undefined) pileService.add(this.virus)
    emit('set-field-virus', (this.virus = card))
  }

  setDopage(card: Card) {
    if (this.dopage !== undefined) pileService.add(this.dopage)
    emit('set-field-dopage', (this.dopage = card))
  }

  setEpidemie(card: Card) {
    if (this.epidemie !== undefined) pileService.add(this.epidemie)
    emit('set-field-epidemie', (this.epidemie = card))
  }

  applyVirus() {
    if (this.virus === undefined) return
    this.virus.effect()
  }

  applyDopage() {
    if (this.dopage === undefined) return
    this.dopage.effect()
  }

  applyEpidemie() {
    if (this.epidemie === undefined) return
    this.epidemie.effect()
  }
}
export const fieldService = new FieldService()
