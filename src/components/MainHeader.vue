<script setup>
import MainNavigation from "./MainNavigation.vue"
</script>
<template>
  <div
    class="relative flex h-20 border-b-2 border-lol-gold-4 items-center bg-lol-gray-4"
  >
    <div
      class="z-10 flex flex-1 justify-between py-4 lg:px-16 md:px-8 sm:px-4 px-2 items-baseline"
    >
      <RouterLink to="/" class="text-2xl text-lol-gold-4 uppercase font-medium"
        >League Champion Overview</RouterLink
      >
      <MainNavigation class="" />
    </div>
    <slot name="VideoBackground"></slot>
  </div>
</template>

<style scoped></style>
