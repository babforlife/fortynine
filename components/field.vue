<template>
  <div class="comp-field flex items-center gap-4 mx-4 text-center">
    <card v-if="fieldService.getVirus()" class="flex-1" :card="fieldService.getVirus()"></card>
    <div v-else class="flex-1">VIRUS</div>
    <card v-if="fieldService.getDopage()" class="flex-1" :card="fieldService.getDopage()"></card>
    <div v-else class="flex-1">DOPAGE</div>
    <card v-if="fieldService.getEpidemie()" class="flex-1" :card="fieldService.getEpidemie()"></card>
    <div v-else class="flex-1">EPIDEMIE</div>
  </div>
</template>

<script>
import { fieldService } from '~/services/cards/field.service'
import { Intello } from '~/services/cards/virus/virus.model'

export default {
  data() {
    return {
      fieldService,
    }
  },
  beforeMount() {
    const intello = new Intello()
    fieldService.setVirus(intello)
    fieldService.setDopage(intello)
    fieldService.setEpidemie(intello)
    fieldService.applyEffect()
  },
}
</script>
