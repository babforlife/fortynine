<template>
  <div class="main flex flex-col h-full">
    <queue class="flex-1"></queue>
    <field class="z-10 flex-1"></field>
    <pile class="flex-[3]"></pile>
    <hand class="z-10 flex-[2]"></hand>
  </div>
</template>

<script>
import { deckService } from '~/services/deck.service'

export default {
  beforeMount() {
    deckService.init()
  },
}
</script>
