<template>
  <div class="comp-field grid grid-cols-3 gap-4 mx-4">
    <card :minimal="true" :card="virus" @click="emit('modal', { context: 'display-card', card: virus })"></card>
    <card :minimal="true" :card="dopage" @click="emit('modal', { context: 'display-card', card: dopage })"></card>
    <card :minimal="true" :card="epidemie" @click="emit('modal', { context: 'display-card', card: epidemie })"></card>
  </div>
</template>
<script lang="ts">
import { on, emit } from 'shuutils'
import { Card } from '~/models'
import { fieldService } from '~/services'

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
    on('virus', () => (this.virus = fieldService.virus!))
    on('dopage', () => (this.dopage = fieldService.dopage!))
    on('epidemie', () => (this.epidemie = fieldService.epidemie!))
  },
}
</script>
