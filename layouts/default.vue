<template>
  <div class="app h-full">
    <displayCard v-if="display.card.loaded()" :card-show="display.card" :play="display.play"></displayCard>
    <slot />
  </div>
</template>

<script lang="ts">
import { on } from 'shuutils'
import { Card, DisplayCard } from '~/models'

export default {
  data() {
    return {
      display: new DisplayCard(),
    }
  },
  beforeMount() {
    on('hide-card', () => (this.display.card = new Card()))
    on('display-card', (displayCard: DisplayCard) => (this.display = displayCard))
  },
}
</script>

<style>
.app {
  overflow: hidden;
}
</style>
