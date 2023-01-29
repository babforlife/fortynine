<template>
  <div class="comp-show-card z-10" @click="emit('hide-card')">
    <div class="blurry-bg absolute flex flex-col items-center justify-center w-full h-full">
      <card :card="cardShow" class="shadow w-[90%]"></card>
      <button>Jouer</button>
    </div>
  </div>
</template>

<script lang="ts">
import { emit } from 'shuutils'
import { Card } from '~/models'

export default {
  props: {
    cardShow: Card,
  },
  data() {
    return {
      emit,
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
