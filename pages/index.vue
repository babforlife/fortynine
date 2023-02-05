<template>
  <div class="main flex flex-col h-full gap-4">
    <queue class="flex-1"></queue>
    <field class="z-10 flex-1"></field>
    <pile class="flex-[4]"></pile>
    <hand class="z-10 flex-[3]"></hand>
  </div>
</template>

<script>
import { deckService, gameService } from '~/services'

export default {
  beforeMount() {
    gameService.init()
    deckService.init()
  },
}
</script>
