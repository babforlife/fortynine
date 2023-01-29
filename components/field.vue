<template>
  <div class="comp-field flex items-center gap-4 mx-4 text-center">
    <card class="flex-1 overflow-hidden" :card="virus" @click="emit('display-card', virus)"></card>
    <card class="flex-1 overflow-hidden" :card="dopage" @click="emit('display-card', dopage)"></card>
    <card class="flex-1 overflow-hidden" :card="epidemie" @click="emit('display-card', epidemie)"></card>
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
