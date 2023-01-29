<template>
  <div class="comp-hand flex overflow-x-auto">
    <card v-for="(card, cardNumber) of hand.cards" :key="cardNumber" class="grow-1 h-full" :card="card" @click="emit('display-card', { card, play: true })"></card>
  </div>
</template>

<script lang="ts">
import { emit } from 'shuutils'
import { Hand } from '~/models/hand.model'
import { handService } from '~/services/hand.service'

export default {
  data() {
    return {
      hand: new Hand(),
      handService,
      emit,
    }
  },
  beforeMount() {
    this.hand = handService.hand
    handService.draw()
  },
}
</script>
