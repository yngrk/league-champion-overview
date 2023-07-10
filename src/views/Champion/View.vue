<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import axios from "axios"

const route = useRoute()
const router = useRouter()
const isMounted = ref(false)

const championId = route.params.championId
const championData = ref({})

const currentSkinPos = ref(0)

const splashURL = ref("")
const skinURL = ref("")

onMounted(async () => {
  // fetch champion data based on id
  // if no champion associated with the id then redirect to home
  try {
    const response = await axios.get(
      `https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/${championId}.json`
    )

    const data = response.data.data[championId]

    championData.value = {
      name: data.id,
      title: data.title,
      img: data.image.full,
      skins: data.skins,
      lore: data.lore,
      tips: {
        ally: data.allytips,
        enemy: data.enemytips,
      },
      tags: data.tags,
      stats: data.stats,
      spells: data.spells,
    }

    splashURL.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
      championData.value.name
    }_${championData.value.skins[currentSkinPos.value].num}.jpg`

    skinURL.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
      championData.value.name
    }_${championData.value.skins[currentSkinPos.value].num}.jpg`

    isMounted.value = true
  } catch (e) {
    router.push({ name: "home" })
  }
})

const nextSkinPos = () => {
  if (!championData) {
    return
  }

  if (currentSkinPos.value < championData.value.skins.length - 1) {
    currentSkinPos.value += 1
  } else {
    currentSkinPos.value = 0
  }

  splashURL.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
    championData.value.name
  }_${championData.value.skins[currentSkinPos.value].num}.jpg`

  skinURL.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
    championData.value.name
  }_${championData.value.skins[currentSkinPos.value].num}.jpg`
}

const prevSkinPos = () => {
  if (!championData) {
    return
  }

  if (currentSkinPos.value !== 0) {
    currentSkinPos.value -= 1
  } else {
    currentSkinPos.value = championData.value.skins.length - 1
  }

  splashURL.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
    championData.value.name
  }_${championData.value.skins[currentSkinPos.value].num}.jpg`

  skinURL.value = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
    championData.value.name
  }_${championData.value.skins[currentSkinPos.value].num}.jpg`
}

const getSkinName = () => {
  const name = championData.value.skins[currentSkinPos.value].name

  if (name === "default") {
    return championData.value.name
  }

  return name
}
</script>

<template>
  <section v-if="isMounted" class="pt-12 px-12 relative">
    <!-- BACKGROUND IMAGE -->
    <img
      :src="splashURL"
      class="opacity-50 blur-3xl -z-50 left-0 select-none absolute top-0 object-cover w-full header-bg mask"
      draggable="false"
    />

    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <!-- SIDE -->
      <div class="relative col-span-1 place-self-center hidden md:block">
        <img :src="skinURL" class="border-2 border-lol-gold-5" />
        <!-- Control -->
        <button
          class="text-8xl h-1/2 absolute bottom-0 top-32 right-3 scale-y-150 text-lol-gold-1 opacity-20 hover:opacity-80 transition-opacity duration-300"
          @click="nextSkinPos"
        >
          &#10095;
        </button>
        <button
          class="text-8xl h-1/2 absolute bottom-0 top-32 left-3 -scale-x-100 scale-y-150 text-lol-gold-1 opacity-20 hover:opacity-80 transition-opacity duration-300"
          @click="prevSkinPos"
        >
          &#10095;
        </button>
        <div class="absolute bottom-4 w-full text-lg text-center">
          {{ getSkinName() }}
        </div>
      </div>

      <!-- MAIN -->
      <div class="flex flex-col lg:col-span-2 col-span-1">
        <!-- Name + Title -->
        <div class="flex flex-wrap gap-1 items-baseline">
          <div class="text-6xl font-bold italic text-lol-gold-4">
            {{ championData.name }}
          </div>
          <div class="text-2xl font-extralight italic text-lol-gold-3">
            {{ championData.title }}
          </div>
        </div>

        <!-- Lore text -->
        <div class="mt-6 text-lg text-lol-gold-1 flex flex-col gap-12">
          <div v-html="championData.lore"></div>
          <RouterLink
            to="/"
            class="self-end md:text-sm text-lol-gray-1 border px-4 rounded-lg bg-lol-gray-5 border-lol-gold-5"
          >
            <p>&#11071; return to overview</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header-bg {
  height: 80vh;
}

.mask {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );

  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
</style>
