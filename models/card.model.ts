export type Group = 'Jeu' | 'Virus' | 'Dopage' | 'Epidemie' | 'Cataclysme' | 'Miroir' | 'drink' | ''

export abstract class Card {
  description = ''
  points = 0
  subTitle = ''
  title = ''
  group!: Group

  constructor(card: Partial<Card> = {}) {
    Object.assign(this, card)
  }

  abstract effect(): void
}
