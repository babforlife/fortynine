import { Card } from '~/models/cards/card.model'

export const regle = new Card({
  points: 1,
  description: "Choisit une nouvelle règle qui doit s'appliquer pour tout le monde",
  group: 'Epidemie',
  subTitle: 'Au choix',
  title: 'Épidémie',
})

export const yesNo = new Card({
  points: 2,
  description: 'Interdit aux mots OUI et NON et à leurs synonymes. Sanction : 1 gorgée',
  group: 'Epidemie',
  subTitle: 'Yes...No...',
  title: 'Épidémie',
})

export const buffalo = new Card({
  points: 1,
  description: 'Interdit de tenir son verre de sa main directrice ! Sanction : Cul sec',
  group: 'Epidemie',
  subTitle: 'Buffalo',
  title: 'Épidémie',
})

export const politesse = new Card({
  points: 1,
  description: 'Inderdit au gros mots ! Le fautif se fait tatouer le gros mot sur la peau ou boit 3 gorgées',
  group: 'Epidemie',
  subTitle: 'Politesse',
  title: 'Épidémie',
})

export const noResponse = new Card({
  points: 1,
  description: 'Il faut attendre au moins 5 secondes avant de répondre à une question. Sanction : 1 gorgée',
  group: 'Epidemie',
  subTitle: 'Réponses interdites',
  title: 'Épidémie',
})
