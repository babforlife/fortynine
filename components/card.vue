<template>
  <div class="comp-card w-auto flex-col flex border-2 rounded aspect-[3/4]">
    <div class="text-center font-[solitreo] text-xl">{{ card?.title }}</div>
    <div class="text-shadow text-xs text-center">{{ card?.subTitle }}</div>
    <div class="text-center">{{ card?.points }} points</div>
    <div>{{ card?.description }}</div>
  </div>
</template>

<script>
import { Card } from '~/models/card.model'

export default {
  props: {
    card: Card,
  },
}
</script>

<style>
.text-shadow {
  text-shadow: 1px 1px red;
}
</style>
flex
