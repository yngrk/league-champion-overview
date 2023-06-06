<script setup>
import MainNavigation from "./MainNavigation.vue"
</script>
<template>
  <div
    class="relative flex h-20 border-b-2 border-lol-gold-4 items-center bg-lol-gray-4"
  >
    <div
      class="z-10 flex flex-1 justify-between py-4 sm:px-16 px-8 items-baseline"
    >
      <RouterLink to="/" class="text-2xl text-lol-gold-4 uppercase font-medium"
        >League Champion Lore</RouterLink
      >
      <MainNavigation class="hidden" />
    </div>
    <slot name="VideoBackground"></slot>
  </div>
</template>

<style scoped></style>
