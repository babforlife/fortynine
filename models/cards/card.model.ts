export type Group = 'Jeu' | 'Virus' | 'Dopage' | 'Epidemie' | 'Cataclysme' | 'Miroir' | 'Drink' | ''

export class Card {
  description = ''
  group: Group = ''
  points: number | 'X' = 0
  subTitle = ''
  title = ''

  constructor(card: Partial<Card> = {}) {
    Object.assign(this, card)
  }

  effect() {}

  loaded() {
    return this.group !== ''
  }
}
