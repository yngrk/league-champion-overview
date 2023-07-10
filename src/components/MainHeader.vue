<script setup>
import GithubIcon from "@/components/SVGComponents/GithubIcon.vue"
</script>
<template>
  <div
    class="relative flex h-20 border-b-2 border-lol-gold-4 items-center bg-lol-gray-4"
  >
    <div
      class="z-10 flex flex-1 justify-between sm:px-16 py-4 md:py-0 px-8 items-center"
    >
      <RouterLink to="/" class="text-2xl text-lol-gold-4 uppercase font-medium"
        >League Champion Lore</RouterLink
      >
      <a
        href="https://yngrk.github.com"
        class="md:flex justify-center items-center gap-2 py-1 px-2 rounded bg-lol-gray-5 bg-opacity-10 hidden border border-lol-gold-4 opacity-80"
      >
        <GithubIcon class="w-6" /> Young Rok Kim, 2023
      </a>
    </div>
    <slot name="VideoBackground"></slot>
  </div>
</template>

<style scoped></style>
