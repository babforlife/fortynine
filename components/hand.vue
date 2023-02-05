<template>
  <div class="comp-hand flex overflow-x-auto">
    <card v-for="(card, index) of cards" :key="index" class="grow-1 h-full" :card="card" @click="selectCard(card)"></card>
  </div>
</template>

<script lang="ts">
import { emit, on } from 'shuutils'
import { Card, ModalConfiguration } from '~/models'
import { handService } from '~/services'

export default {
  data() {
    return {
      cards: [] as Card[],
      handService,
    }
  },
  beforeMount() {
    on('draw', () => Object.assign(this.cards, handService.cards))
    handService.draw()
  },
  methods: {
    selectCard(card: Card) {
      emit('modal', new ModalConfiguration({ context: 'display-card', card, isButton: true }))
    },
  },
}
</script>
