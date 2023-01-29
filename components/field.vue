<template>
  <div class="comp-field grid mx-4">
    <card :minimal="true" :card="virus" @click="emit('display-card', { card: virus, play: false })"></card>
    <card :minimal="true" :card="dopage" @click="emit('display-card', { card: dopage, play: false })"></card>
    <card :minimal="true" :card="epidemie" @click="emit('display-card', { card: epidemie, play: false })"></card>
  </div>
</template>

<script lang="ts">
import { on, emit } from 'shuutils'
import { Card } from '~/models'

export default {
  data() {
    return {
      virus: new Card(),
      dopage: new Card(),
      epidemie: new Card(),
      emit,
    }
  },
  beforeMount() {
    on('set-field-virus', (virus: Card) => (this.virus = virus))
    on('set-field-dopage', (dopage: Card) => (this.dopage = dopage))
    on('set-field-epidemie', (epidemie: Card) => (this.epidemie = epidemie))
  },
}
</script>

<style>
.comp-field {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1rem;
}
</style>
