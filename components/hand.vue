<template>
  <div class="comp-hand flex overflow-x-auto">
    <card v-for="(card, cardNumber) of hand.cards" :key="cardNumber" class="grow-1 h-full" :card="card"></card>
  </div>
</template>

<script>
import { Intello } from '~/services/cards/virus/virus.model'
import { fieldService } from '~/services/cards/field.service'
import { Hand } from '~/models/hand.model'

export default {
  data() {
    return {
      hand: new Hand(),
    }
  },
  beforeMount() {
    this.hand = new Hand()
    const intello = new Intello()

    this.hand.cards.push(intello, intello, intello)

    fieldService.setVirus(intello)
    fieldService.applyEffect()
  },
}
</script>
