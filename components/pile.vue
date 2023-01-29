<template>
  <div class="comp-pile relative flex justify-center">
    <card v-for="(card, cardNumber) of pile" :key="cardNumber" :style="{ transform: orientation[cardNumber] }" :card="card" class="absolute h-full"></card>
  </div>
</template>

<script lang="ts">
import { on } from 'shuutils'
import { Card } from '~/models'
import { pileService } from '~/services'

export default {
  data() {
    return {
      pile: [] as Card[],
      orientation: [] as string[],
      pileService,
    }
  },
  beforeMount() {
    on('push-to-pile', (card: Card) => this.add(card))
  },
  methods: {
    add(card: Card) {
      const rotation = Math.floor(Math.random() * 90) - 45
      this.orientation.push(`rotate(${rotation}deg)`)
      this.pile.push(card)
    },
  },
}
</script>

<style>
.comp-pile {
  transform: scale(0.8);
}
</style>
