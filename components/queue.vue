<template>
  <div class="comp-queue text-ellipsis flex items-center justify-center gap-3 mx-5 overflow-hidden">
    <div>{{ players[0].name }}</div>
  </div>
</template>

<script lang="ts">
import { on } from 'shuutils'
import { Player } from '~/models'
import { gameService } from '~/services'

export default {
  data() {
    return {
      players: [] as Player[],
    }
  },
  beforeMount() {
    on('players', () => (this.players = gameService.players))
    gameService.send()
  },
}
</script>
