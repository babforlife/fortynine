<template>
  <div
    class="comp-display-card"
    :class="{ 'blurry-bg': display.card.loaded(), ' justify-evenly absolute z-50 flex flex-col items-center w-full h-full': display.card.loaded() || show }"
    @click="hide()"
  >
    <Transition name="fade" @leave="show = true" @after-leave="show = false">
      <card v-if="display.card.loaded()" :card="display.card" class="shadow w-[90%]"></card>
    </Transition>
    <animated-button-bubble v-if="display.card.loaded() && display.play" text="Jouer" @click="handService.playCard(display.card)">Jouer</animated-button-bubble>
  </div>
</template>

<script lang="ts">
import { on } from 'shuutils'
import { Card, DisplayCard } from '~/models'
import { handService } from '~/services'

export default {
  data() {
    return {
      display: new DisplayCard(),
      handService,
      show: false,
    }
  },
  beforeMount() {
    on('display-card', (displayCard: DisplayCard) => (this.display = displayCard))
  },
  methods: {
    hide() {
      this.display.card = new Card()
    },
  },
}
</script>

<style>
.blurry-bg {
  backdrop-filter: blur(10px) saturate(70%);
  transition: all 0.15s ease-in;
}
.shadow {
  box-shadow: 0 0 2rem black;
}

.fade-enter-active {
  transition: transform 0.25s ease;
}
.fade-leave-active {
  transition: transform 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0);
}
</style>
