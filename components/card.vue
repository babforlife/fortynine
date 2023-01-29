<template>
  <div :group="card?.group" :class="minimalClass" class="comp-card aspect-[3/4] rounded-2xl strip-gradient flex flex-col py-2 text-center border-2 border-black">
    <div class="title text-3xl truncate">{{ card?.title }}</div>
    <div class="text-shadow">{{ card?.subTitle }}</div>
    <div v-if="!minimal" class="text-shadow mt-auto mb-1">{{ card?.points }} points</div>
    <div v-if="!minimal" class="white rounded-2xl p-2 mx-4 overflow-hidden text-xs text-white bg-black">{{ card?.description }}</div>
  </div>
</template>

<script>
import { Card } from '~/models/cards/card.model'

export default {
  props: {
    card: Card,
    minimal: { type: Boolean, default: false },
  },
  computed: {
    minimalClass() {
      return this.minimal ? 'aspect-auto' : ''
    },
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
