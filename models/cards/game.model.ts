import { Card } from './card.model'

export const theme = new Card({
  points: 2,
  description: 'Au choix ! « Marques de bière », « Ce qui pousse dans les arbres», « Albums de Tintin », ...',
  group: 'Virus',
  subTitle: 'Thème',
  title: 'Virus',
})

export const suitcase = new Card({
  points: 2,
  description: 'Dans ma valise, il y a ...',
  group: 'Virus',
  subTitle: 'Dans ma valise',
  title: 'Virus',
})

export const didDidnt = new Card({
  points: 2,
  description: "Choisis un « j'ai jamais » ou un « j'ai déjà »",
  group: 'Virus',
  subTitle: "J'ai jamais / J'ai déjà",
  title: 'Virus',
})

export const lexicalField = new Card({
  points: 2,
  description: 'Mots de la même famille ! 2 gorgées pour le perdant',
  group: 'Virus',
  subTitle: 'Champ lexical',
  title: 'Virus',
})
