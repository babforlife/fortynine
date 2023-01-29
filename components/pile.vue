<template>
  <div class="comp-pile flex justify-center">
    <card :card="lastCard" class="h-full"></card>
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
      pileService,
    }
  },
  computed: {
    lastCard() {
      return this.pile[this.pile.length - 1]
    },
  },
  beforeMount() {
    on('push-to-pile', (card: Card) => this.pile.push(card))
  },
}
</script>
