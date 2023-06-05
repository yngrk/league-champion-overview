<script setup>
import SearchBarFrame from "../../components/SVGComponents/SearchBarFrame.vue"
import ChampionList from "../../components/Champions/List.vue"
import RoleIconFill from "../../components/SVGComponents/RoleIconFill.vue"
import RoleIconTop from "../../components/SVGComponents/RoleIconTop.vue"
import RoleIconMid from "../../components/SVGComponents/RoleIconMid.vue"
import RoleIconJungle from "../../components/SVGComponents/RoleIconJungle.vue"
import RoleIconADC from "../../components/SVGComponents/RoleIconADC.vue"
import RoleIconSupport from "../../components/SVGComponents/RoleIconSupport.vue"

const props = defineProps({
  currentSelectedRole: {
    type: String,
    required: true,
  },
  champions: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <section class="md:hidden mt-4 px-4 flex flex-col gap-8">
    <!-- HEADER BAR -->
    <div class="flex flex-col gap-4 items-center">
      <!-- ICONS -->
      <div class="flex gap-4 items-center w-64">
        <div
          class="w-full relative cursor-pointer"
          @click="($event) => $emit('select', 'all')"
        >
          <RoleIconFill
            :class="[
              'transition-transform duration-300',
              { 'scale-125': currentSelectedRole === 'all' },
            ]"
          />
          <div
            :class="[
              'absolute top-1 left-1 blur-md -z-10 transition-opacity duration-300 bg-lol-blue-1 h-3 w-3 rounded-full outline',
              {
                'opacity-0': currentSelectedRole !== 'all',
              },
            ]"
          ></div>
        </div>

        <div
          class="w-full relative cursor-pointer"
          @click="($event) => $emit('select', 'top')"
        >
          <RoleIconTop
            :class="[
              'transition-transform duration-300',
              { 'scale-125': currentSelectedRole === 'top' },
            ]"
          />
          <div
            :class="[
              'absolute top-1 left-1 blur-md -z-10 transition-opacity duration-300 bg-lol-blue-1 h-3 w-3 rounded-full outline',
              { 'opacity-0': currentSelectedRole !== 'top' },
            ]"
          ></div>
        </div>

        <div
          class="relative w-full cursor-pointer"
          @click="($event) => $emit('select', 'jungle')"
        >
          <RoleIconJungle
            :class="[
              'transition-transform duration-300',
              { 'scale-125': currentSelectedRole === 'jungle' },
            ]"
          />
          <div
            :class="[
              'absolute top-1 left-1 blur-md -z-10 transition-opacity duration-300 bg-lol-blue-1 h-3 w-3 rounded-full outline',
              { 'opacity-0': currentSelectedRole !== 'jungle' },
            ]"
          ></div>
        </div>

        <div
          class="relative w-full cursor-pointer"
          @click="($event) => $emit('select', 'mid')"
        >
          <RoleIconMid
            :class="[
              'transition-transform duration-300',
              { 'scale-125': currentSelectedRole === 'mid' },
            ]"
          />
          <div
            :class="[
              'absolute top-1 left-1 blur-md -z-10 transition-opacity duration-300 bg-lol-blue-1 h-3 w-3 rounded-full outline',
              { 'opacity-0': currentSelectedRole !== 'mid' },
            ]"
          ></div>
        </div>

        <div
          class="relative w-full cursor-pointer"
          @click="($event) => $emit('select', 'adc')"
        >
          <RoleIconADC
            :class="[
              'transition-transform duration-300',
              { 'scale-125': currentSelectedRole === 'adc' },
            ]"
          />
          <div
            :class="[
              'absolute top-1 left-1 blur-md -z-10 transition-opacity duration-300 bg-lol-blue-1 h-3 w-3 rounded-full outline',
              { 'opacity-0': currentSelectedRole !== 'adc' },
            ]"
          ></div>
        </div>

        <div
          class="relative w-full scale-125 cursor-pointer"
          @click="($event) => $emit('select', 'support')"
        >
          <RoleIconSupport
            :class="[
              'transition-transform duration-300',
              { 'scale-125': currentSelectedRole === 'support' },
            ]"
          />
          <div
            :class="[
              'absolute top-1 left-2 blur-md -z-10 transition-opacity duration-300 bg-lol-blue-1 h-3 w-3 rounded-full outline',
              { 'opacity-0': currentSelectedRole !== 'support' },
            ]"
          ></div>
        </div>
      </div>
      <!-- SEARCH BAR -->
      <div class="h-8 w-64 relative">
        <input
          type="text"
          @input="$emit('searchInput', $event)"
          placeholder="Search"
          class="bg-transparent px-2 w-full h-full focus:outline-none"
        />
        <!-- SEARCH BAR DECORATION -->
        <SearchBarFrame
          class="absolute top-0 champion-select-search w-64 -z-10"
        />
      </div>
    </div>

    <!-- CHAMPION LIST -->
    <div class="mb-6">
      <ChampionList :champions="champions" />
    </div>
  </section>
</template>

<style scoped>
.champion-list-container {
  height: 100%;
  width: 100%;
}
</style>
