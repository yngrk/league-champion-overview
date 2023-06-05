<script setup>
import { defineAsyncComponent, onMounted, ref, watch } from "vue"
import { useChampionsStore } from "@/stores/ChampionsStore"
import Desktop from "./Desktop.vue"
import Mobile from "./Mobile.vue"

let searchText = ref("")
let roleSelect = ref("")

let currentSelectedRole = ref("all")

const champions = useChampionsStore()

onMounted(async () => {
  if (champions.list.length === 0) {
    await champions.init()
  }
})

const select = (role) => {
  roleSelect.value = role
  currentSelectedRole.value = role
}
</script>

<template>
  <Desktop
    class="h-full mt-8 hidden md:block"
    :current-selected-role="currentSelectedRole"
    :role-select="roleSelect"
    :champions="champions.filter(searchText, roleSelect)"
    @searchInput="($event) => (searchText = $event.target.value)"
    @select="select"
  />
  <Mobile
    :current-selected-role="currentSelectedRole"
    :role-select="roleSelect"
    :champions="champions.filter(searchText, roleSelect)"
    @searchInput="($event) => (searchText = $event.target.value)"
    @select="select"
  />
</template>
