import { Card } from '~/models/cards/card.model'

export const intello = new Card({
  points: 2,
  description: 'Choisi un joueur qui devra lever la main pour parler, tu lui donneras la parole. 1 gorgée par oubli',
  group: 'Virus',
  subTitle: 'Intello',
  title: 'Virus',
})

export const shutUp = new Card({
  points: 2,
  description: 'Choisis un joueur qui devient muet 1 gorgée par oubli',
  group: 'Virus',
  subTitle: 'Bouche cousue',
  title: 'Virus',
})

export const stranger = new Card({
  points: 2,
  description: "Choisis un joueur qui devra parler avec l'accent de ton choix. 1 gorgée par oubli",
  group: 'Virus',
  subTitle: 'Étranger',
  title: 'Virus',
})

export const blackHole = new Card({
  points: 2,
  description: "Choisis un joueur qui boira à chaque fois qu'un autre joueur boit",
  group: 'Virus',
  subTitle: 'Trou noir',
  title: 'Virus',
})

export const dogShit = new Card({
  points: 2,
  description: "Choisis un joueur qui devra se faire insulter par tout le monde et n'aura pas le droit de répondre 1 gorgée par erreur",
  group: 'Virus',
  subTitle: 'Sous-merde',
  title: 'Virus',
})

export const ghost = new Card({
  points: 2,
  description: 'Choisis un joueur qui devra être ignoré par tout le monde. 1 gorgée pour ceux qui oublient',
  group: 'Virus',
  subTitle: 'Fantômas',
  title: 'Virus',
})
