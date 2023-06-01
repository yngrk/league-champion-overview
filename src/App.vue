<script setup>
import { RouterView } from "vue-router"
import MainHeader from "./components/MainHeader.vue"
import MainFooter from "./components/MainFooter.vue"
import { defineAsyncComponent } from "vue"

const MagicVideoBG = defineAsyncComponent(() =>
  import("@/components/VideoComponents/VideoBackground.vue")
)

var isChrome = navigator.userAgent.includes("Chrome")
</script>

<template>
  <div class="flex flex-col h-full mx-auto">
    <MainHeader>
      <template #VideoBackground>
        <div class="absolute h-full w-full hidden md:block">
          <MagicVideoBG v-if="isChrome" class="bg-strip -z-40 w-full">
            <source src="./assets/vfx/magicstrip.webm" type="video/webm" />
          </MagicVideoBG>
        </div>
      </template>
    </MainHeader>

    <RouterView />

    <MainFooter></MainFooter>
  </div>
</template>

<style scoped>
.bg-strip {
  object-fit: fill;
  height: 100%;
  transform: translateY(-10%) scaleY(2);
}

.footer-bg-strip {
  object-fit: fill;
  height: 100%;
  transform: translateY(-100%) scaleY(5);
}
</style>
