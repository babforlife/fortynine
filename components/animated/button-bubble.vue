<template>
  <div class="">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="gooey">
          <!-- in="sourceGraphic" -->
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
          <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
        </filter>
      </defs>
    </svg>

    <button id="gooey-button" class="rounded-xl w-auto">
      <slot />
      <span v-show="!disable" class="bubbles">
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="sass">
$prime: black
$second: white

svg
    position: absolute
    top: -4000px
    left: -4000px

#gooey-button
    padding: 0.5rem 1.5rem
    font-size: 2rem
    border: none
    color: $second
    filter: url('#gooey')
    position: relative
    background-color: $prime

    &:focus
        outline: none

    .bubbles
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0

        .bubble
            background-color: $prime
            border-radius: 100%
            position: absolute
            top: 0
            left: 0
            display: block
            z-index: -1

            @for $bubble from 1 through 10
                &:nth-child(#{$bubble})
                    $size: 25px
                    left: (random(90) + 10)+px
                    width: $size
                    height: $size
                    animation: move-#{$bubble} #{3 + $bubble*0.02}s infinite
                    animation-delay: #{$bubble*0.2}s

@for $bubble from 1 through 10
    @keyframes move-#{$bubble}
        0%
            transform: translate(0, 0)
        99%
            transform: translate(0, -(random(80) + 50)+px)
        100%
            transform: translate(0, 0)
            opacity: 0
</style>
