<template>
  <div class="app h-full">
    <displayCard v-if="card.loaded()" :card-show="card"></displayCard>
    <slot />
  </div>
</template>

<script lang="ts">
import { on } from 'shuutils'
import { Card } from '~/models'

export default {
  data() {
    return {
      card: new Card(),
    }
  },
  beforeMount() {
    on('hide-card', () => (this.card = new Card()))
    on('display-card', (card: Card) => (this.card = card))
  },
}
</script>

<style>
.app {
  overflow: hidden;
}
</style>
