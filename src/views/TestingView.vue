<script setup>
import { defineAsyncComponent } from 'vue'

const SheetBG = defineAsyncComponent(() => import('@/components/SheetBackground.vue'))
const VideoBG = defineAsyncComponent(() => import('@/components/VideoBackground.vue'))
</script>
<template>
  <div class="h-full w-full grid place-items-center">
    <div class="relative h-96 w-96 mt-24">
      <SheetBG imageSrc="src/assets/images/magic-circular.png" />
      <VideoBG class="videobg">
        <source src="src/assets/vfx/magicstrip.webm" type="video/webm" />
      </VideoBG>
    </div>
  </div>
</template>

<style scoped>
.videobg {
  position: absolute;
  top: 0;
  object-fit: fill;
  transform: scale(3);
}
</style>
