<template>
  <div :group="card?.group" class="comp-card text-center border-black rounded-2xl strip-gradient py-4 w-auto flex-col flex border-2 aspect-[3/4]">
    <div class="font-[solitreo] text-3xl">{{ card?.title }}</div>
    <div class="text-shadow">{{ card?.subTitle }}</div>
    <div class="text-shadow mt-auto mb-1">{{ card?.points }} points</div>
    <div class="white rounded-2xl p-2 mx-4 text-white bg-black">{{ card?.description }}</div>
  </div>
</template>

<script>
import { Card } from '~/models/cards/card.model'

export default {
  props: {
    card: Card,
  },
}
</script>

<style>
.comp-card[group='Virus'] {
  --color-strip: var(--color-strip-virus);
  --color-background: var(--color-background-virus);
}

.comp-card[group='Jeu'] {
  --color-strip: var(--color-strip-jeu);
  --color-background: var(--color-background-jeu);
}

.comp-card[group='Cataclysme'] {
  --color-strip: var(--color-strip-cataclysme);
  --color-background: var(--color-background-cataclysme);
}

.comp-card[group='Dopage'] {
  --color-strip: var(--color-strip-dopage);
  --color-background: var(--color-background-dopage);
}

.comp-card[group='Epidemie'] {
  --color-strip: var(--color-strip-epidemie);
  --color-background: var(--color-background-epidemie);
}

.comp-card[group='Drink'] {
  --color-strip: var(--color-strip-drink);
  --color-background: var(--color-background-drink);
}

.comp-card[group='Miroir'] {
  --color-strip: var(--color-strip-miroir);
  --color-background: var(--color-background-miroir);
}

.text-shadow {
  text-shadow: 0px 0px 3px white;
}
</style>
flex
