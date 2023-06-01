<script setup>
import Card from "./Card.vue";

const props = defineProps({
  champions: {
    type: Array,
    required: true,
  },
});

const getImageURL = (filename) => {
  return `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${filename}`;
};
</script>

<template>
  <div
    class="grid xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 gap-2 place-content-start"
  >
    <Card
      v-for="champion in champions"
      :champion="champion"
      class="card hover:scale-105 transition-all duration-200 hover:cursor-pointer active:scale-100"
      :imageURL="getImageURL(champion.image.full)"
      @click="() => console.log(champion.image.full)"
    />
  </div>
</template>

<style scoped>
.card {
}
</style>
