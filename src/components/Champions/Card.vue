<script setup>
const props = defineProps({
  champion: {
    type: Object,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="select-none">
    <img :src="imageURL" draggable="false" class="w-full border border-lol-gray-3" />
    <div class="text-center xl:text-md lg:text-sm md:text-xs">{{ champion.name }}</div>
  </div>
</template>
