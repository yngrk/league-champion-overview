<script setup>
import { defineAsyncComponent, onMounted, ref, watch } from "vue";
import { useChampionsStore } from "@/stores/ChampionsStore";
import ChampionSelectSideFrame from "../components/SVGComponents/ChampionSelectSideFrame.vue";
import ChampionSelectHeaderStrip from "../components/SVGComponents/ChampionSelectHeaderStrip.vue";
import CornerPiece1 from "../components/SVGComponents/CornerPiece1.vue";
import CornerPiece2 from "../components/SVGComponents/CornerPiece2.vue";
import SearchBarFrame from "../components/SVGComponents/SearchBarFrame.vue";
import ChampionList from "../components/Champions/List.vue";
import RoleIconFill from "../components/SVGComponents/RoleIconFill.vue";
import RoleIconTop from "../components/SVGComponents/RoleIconTop.vue";
import RoleIconMid from "../components/SVGComponents/RoleIconMid.vue";
import RoleIconJungle from "../components/SVGComponents/RoleIconJungle.vue";
import RoleIconADC from "../components/SVGComponents/RoleIconADC.vue";
import RoleIconSupport from "../components/SVGComponents/RoleIconSupport.vue";

let searchText = ref("");
let roleSelect = ref("");

let currentSelectedRole = ref("all");

const champions = useChampionsStore();

const magicLinear1 = defineAsyncComponent(() =>
  import("@/components/ImageComponents/MagicLinear1.vue")
);
const magicTwistedL1 = defineAsyncComponent(() =>
  import("@/components/ImageComponents/MagicTwistedL1.vue")
);
const magicTwistedR2 = defineAsyncComponent(() =>
  import("@/components/ImageComponents/MagicTwistedR2.vue")
);
const summonersRiftBG = defineAsyncComponent(() =>
  import("@/components/ImageComponents/SummonersRiftBG.vue")
);

onMounted(async () => {
  if (champions.list.length === 0) {
    await champions.init();
    console.log("fetch:champions-list");
  }
});

const select = (role) => {
  roleSelect.value = role;
  currentSelectedRole.value = role;
};
</script>

<template>
  <!-- DESKTOP VIEW -->
  <section class="h-full mt-8 hidden md:block">
    <div class="h-full relative mx-auto md:px-16 champion-select-container">
      <div class="flex justify-between h-full px-5">
        <div class="flex flex-col w-full">
          <!-- TOP BAR -->
          <div class="flex justify-between text-center px-4 pb-4">
            <!-- ICONS -->
            <div
              class="flex-1 gap-4 flex self-center justify-start md:h-5 items-center"
            >
              <div
                class="relative w-5 cursor-pointer"
                @click="($event) => select('all')"
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
                class="relative w-5 cursor-pointer"
                @click="($event) => select('top')"
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
                class="relative w-5 cursor-pointer"
                @click="($event) => select('jungle')"
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
                class="relative w-5 cursor-pointer"
                @click="($event) => select('mid')"
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
                class="relative w-5 cursor-pointer"
                @click="($event) => select('adc')"
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
                class="relative w-7 cursor-pointer"
                @click="($event) => select('support')"
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
            <!-- HEADER DECORATION -->
            <div class="relative flex-1 flex justify-center">
              <ChampionSelectHeaderStrip
                class="champion-select-header -z-40 absolute"
              />
              <div
                class="champion-select-header-gradient opacity-60 absolute -z-50"
              ></div>

              <magicLinear1
                class="magic-linear-1 absolute opacity-50 -z-40 select-none"
              />
            </div>
            <!-- SEARCH BAR -->
            <div class="flex justify-end self-center relative flex-1">
              <input
                type="text"
                v-model="searchText"
                placeholder="Search"
                class="bg-transparent px-2 h-8 focus:outline-none champion-select-search"
              />
              <!-- SEARCH BAR DECORATION -->
              <SearchBarFrame
                class="absolute champion-select-search w-32 -z-10"
              />
            </div>
          </div>
          <div
            class="champion-select-divider relative mb-4 border-t border-lol-gold-4"
          ></div>
          <!-- CHAMPION LIST -->
          <div class="champion-select relative grid place-items-center">
            <div class="champion-list-container p-0 absolute opacity-80 z-30">
              <ChampionList
                class="pt-4 px-2 h-full w-full masked-overflow"
                :champions="champions.filter(searchText, roleSelect)"
              />
            </div>

            <!-- CHAMPION LIST DECORATION -->
            <CornerPiece2
              class="champion-select-corner2 absolute -bottom-1 -left-1 rotate-180"
            />
            <CornerPiece2
              class="champion-select-corner2 absolute -top-1 -right-1"
            />
            <summonersRiftBG
              class="sr-bg absolute top-0 opacity-30 select-none -z-30 h-full w-full object-cover blur-sm"
            />
          </div>
          <div
            class="champion-select-divider relative border-opacity-50 mt-4 border-t border-lol-gold-4"
          ></div>
        </div>
        <!-- DECORATION ORNAMENTS -->
        <ChampionSelectSideFrame class="h-full absolute -left-2 opacity-50" />
        <ChampionSelectSideFrame
          class="h-full -scale-x-100 absolute -right-2 opacity-50"
        />
        <CornerPiece1
          class="champion-select-corner absolute rotate-90 -left-3 -top-6"
        />
        <CornerPiece1
          class="champion-select-corner absolute rotate-180 -right-3 -top-6"
        />
      </div>
    </div>
    <!-- SECTION DECORATION -->
    <magicTwistedL1
      class="magic-twisted-l-1 absolute top-24 left-0 opacity-30 -z-50 select-none"
    />
    <magicTwistedR2
      class="magic-twisted-r-2 absolute bottom-0 right-0 opacity-50 -z-50 select-none"
    />
  </section>
</template>

<style scoped>
.champion-list-container {
  height: 100%;
  width: 100%;
  transform: scaleY(1.05);
}
.sr-bg {
  transform: translateY(-20px);
}
.magic-linear-1 {
  transform: scaleY(-2) scaleX(2) translateY(50%) translateX(-5%);
}

.magic-twisted-l-1 {
  height: 30%;
}

.magic-twisted-r-2 {
  height: 50%;
}
.champion-select-container {
  min-height: 300px;
  min-width: 680px;
  width: 95%;
}

.champion-select-divider {
  width: 104%;
  right: 2%;
}

.champion-select-header {
  height: 300%;
  transform: translateY(-51%) scale(0.65);
}

.champion-select-header-gradient {
  height: 300px;
  width: 200%;
  transform: translateY(-90%);

  background: -moz-radial-gradient(
    ellipse at center,
    rgba(10, 200, 185, 1) 0%,
    transparent 70%
  );
  background: -webkit-radial-gradient(
    ellipse at center,
    rgba(10, 200, 185, 1) 0%,
    transparent 70%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(10, 200, 185, 1) 0%,
    transparent 70%
  );
  background-origin: border-box;
  background-position: 100% 0%;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0ac8b9",endColorstr="#00d4ff",GradientType=1);
}

.champion-select-corner {
  height: 10%;
}

.champion-select-search {
  width: 220px;
}

.champion-select-corner2 {
  height: 20%;
}

.champion-select {
  flex: 1;
}

/* source: https://pqina.nl/blog/fade-out-overflow-using-css-mask-image/ */
.masked-overflow {
  /* mask fade distance, for use in mask calculations */
  --mask-height: 3vh;

  /* If content exceeds height of container, overflow! */
  overflow-y: auto;

  /* Need to make sure container has bottom space,
  otherwise content at the bottom is always faded out */
  padding-bottom: var(--mask-height);

  /* The CSS mask */

  /* The content mask is a linear gradient from top to bottom */
  --mask-image-content: linear-gradient(
    to bottom,
    transparent,
    black var(--mask-height),
    black calc(100% - var(--mask-height)),
    transparent
  );

  /* Here we scale the content gradient to the width of the container 
  minus the scrollbar width. The height is the full container height */
  --mask-size-content: 100% 100%;

  /* Apply the mask image and mask size variables */
  mask-image: var(--mask-image-content);
  mask-size: var(--mask-size-content);

  /* Position the content gradient in the top left, and the 
  scroll gradient in the top right */
  mask-position: 0 0, 100% 0;

  /* We don't repeat our mask images */
  mask-repeat: no-repeat, no-repeat;
}

::-webkit-scrollbar {
  width: 1px; /* Adjust the width of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #785a28; /* Set the background color of the scrollbar thumb */
}
</style>
