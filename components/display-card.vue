<template>
  <div class="comp-show-card" @click="emit('hide-card')">
    <div class="blurry-bg justify-evenly absolute z-50 flex flex-col items-center w-full h-full">
      <card :card="cardShow" class="shadow w-[90%]"></card>
      <v-button v-if="play" class="rounded-xl px-10 py-2 text-4xl text-white bg-black border-2 border-black" @click="handService.playCard(cardShow)">Jouer</v-button>
    </div>
  </div>
</template>

<script lang="ts">
import { emit } from 'shuutils'
import { Card } from '~/models'
import { handService } from '~/services'

export default {
  props: {
    cardShow: {
      type: Card,
      required: true,
    },
    play: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      emit,
      handService,
    }
  },
}
</script>

<style>
.blurry-bg {
  backdrop-filter: blur(10px) saturate(70%);
}
.shadow {
  box-shadow: 0 0 2rem black;
}
</style>
