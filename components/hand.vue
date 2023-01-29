<template>
  <div class="comp-hand flex overflow-x-auto">
    <card v-for="(card, cardNumber) of hand.cards" :key="cardNumber" class="grow-1 h-full" :card="card" @click="handService.playCard(card)"></card>
  </div>
</template>

<script lang="ts">
import { Hand } from '~/models/hand.model'
import { handService } from '~/services/hand.service'

export default {
  data() {
    return {
      hand: new Hand(),
      handService,
    }
  },
  beforeMount() {
    this.hand = handService.hand
    handService.draw()
  },
}
</script>
