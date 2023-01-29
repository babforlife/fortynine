import { Card } from '~/models/cards/card.model'

export const dieu = new Card({
  points: 2,
  description: "Tu peux distribuer jusqu'à 4 gorgées par tour, et gracier qui tu veux quand tu veux",
  group: 'Dopage',
  subTitle: 'Dieu',
  title: 'Dopage',
})

export const cesar = new Card({
  points: 2,
  description: "A chaque fois qu'un joueur doit boire, tu décides : - Pouce haut : le joueur est gracié ! - Pouce bas : le joueur double !",
  group: 'Dopage',
  subTitle: 'César',
  title: 'Dopage',
})

export const punisher = new Card({
  points: 2,
  description: "Tu es le vengeur ! Dès qu'un joueur donne des gorgées, tu peux lui en donner tout autant",
  group: 'Dopage',
  subTitle: 'The Punisher',
  title: 'Dopage',
})

export const sheriff = new Card({
  points: 2,
  description: 'Distribue 7 gorgées par tour !',
  group: 'Dopage',
  subTitle: 'Sheriff',
  title: 'Dopage',
})

export const meduse = new Card({
  points: 2,
  description: "Dès qu'un joueur te regarde dans les yeux, il boit !",
  group: 'Dopage',
  subTitle: 'Médusa',
  title: 'Dopage',
})

export const dopage = new Card({
  points: 2,
  description: "Fais imiter n'importe quel animal à n'importe qui, n'importe quand !",
  group: 'Dopage',
  subTitle: 'Directeur de zoo',
  title: 'Dopage',
})
