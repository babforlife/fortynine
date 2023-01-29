import { Card } from './card.model'

export const thunder = new Card({
  points: 3,
  description: 'Choisis 3 joueurs qui vont boire 4 gorgées !',
  group: 'Cataclysme',
  subTitle: 'Tonerre',
  title: 'Cataclysme',
})

export const drought = new Card({
  points: 3,
  description: 'Choisis 2 joueurs qui vont terminer leur verre !',
  group: 'Cataclysme',
  subTitle: 'Tonerre',
  title: 'Cataclysme',
})

export const earthquake = new Card({
  points: 3,
  description: 'Tous les joueurs sauf toi boivent 3 gorgées !',
  group: 'Cataclysme',
  subTitle: 'Séisme',
  title: 'Cataclysme',
})

export const tornado = new Card({
  points: 3,
  description: 'Choisis un joueur qui va faire 10 tours sur lui-même puis terminer son verre !',
  group: 'Cataclysme',
  subTitle: 'Tornade',
  title: 'Cataclysme',
})
