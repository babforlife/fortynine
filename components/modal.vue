<template>
  <div v-show="config.active || animation" :class="{ 'blurry-bg': config.active }" class="comp-modale" @click="handleClick">
    <Transition name="fade" @leave="animation = true" @after-leave="animation = false">
      <card v-if="config.card" :card="config.card" class="shadow w-[90%] comp-display-card"></card>
    </Transition>

    <animated-button-bubble v-if="config.isButton" @click="handleButton">Jouer</animated-button-bubble>
  </div>
</template>

<script lang="ts">
import { on } from 'shuutils'
import { handService } from '~/services'
import { ModalConfiguration } from '~/models'

export default {
  data() {
    return {
      animation: false,
      handService,
      config: {} as ModalConfiguration,
    }
  },
  beforeMount() {
    on('modal', (configuration: ModalConfiguration) => (this.config = new ModalConfiguration(configuration)))
  },
  methods: {
    handleButton(event: Event) {
      event.stopPropagation()
      if (this.config.context === 'display-card') handService.playCard(this.config.card!)
    },
    handleClick() {
      if (this.config.context === 'display-card') this.config.hide()
    },
  },
}
</script>

<style>
.comp-modale {
  justify-content: space-evenly;
  position: absolute;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
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
