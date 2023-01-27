import { Card } from '~/models/card.model'

export class Intello extends Card {
  constructor() {
    super({ points: 2, description: 'Choisi un joueur, il devra lever la main pour parler', group: 'Virus', subTitle: 'Intello', title: 'Virus' })
  }

  effect(): void {
    console.log('intello effect is applying')
  }
}
