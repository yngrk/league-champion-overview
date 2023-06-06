import axios from "axios"
import { defineStore } from "pinia"

export const useChampionsStore = defineStore("champions", {
  state: () => ({
    version: "",
    list: [],
  }),

  actions: {
    async init() {
      const response = await axios.get(
        "https://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json"
      )
      const champions = response.data
      this.version = champions.version
      this.list = Object.keys(champions.data).map((key) => champions.data[key])
    },
  },

  getters: {
    filteredByName(state) {
      return (str) => {
        return state.list.filter((ch) =>
          ch.name.toLowerCase().includes(str.toLowerCase())
        )
      }
    },
    filteredByRole(state) {
      return (role) => {
        const topLane = ["Tank", "Fighter"]
        const midLane = ["Mage", "Assassin"]
        const jungle = ["Tank", "Fighter"]
        const adc = ["Marksman"]
        const support = ["Support"]

        switch (role) {
          case "top":
            return state.list.filter((champion) =>
              champion.tags.some((tag) => topLane.includes(tag))
            )
          case "mid":
            return state.list.filter((champion) =>
              champion.tags.some((tag) => midLane.includes(tag))
            )
          case "jungle":
            return state.list.filter((champion) =>
              champion.tags.some((tag) => jungle.includes(tag))
            )
          case "adc":
            return state.list.filter((champion) =>
              champion.tags.some((tag) => adc.includes(tag))
            )
          case "support":
            return state.list.filter((champion) =>
              champion.tags.some((tag) => support.includes(tag))
            )
          default:
            return state.list
        }
      }
    },

    filter(state) {
      return (str, role) => {
        let list = state.list

        // filter by role
        const topLane = ["Tank", "Fighter"]
        const midLane = ["Mage", "Assassin"]
        const jungle = ["Tank", "Fighter"]
        const adc = ["Marksman"]
        const support = ["Support"]

        switch (role) {
          case "top":
            list = list.filter((champion) =>
              champion.tags.some((tag) => topLane.includes(tag))
            )
            break
          case "mid":
            list = list.filter((champion) =>
              champion.tags.some((tag) => midLane.includes(tag))
            )
            break
          case "jungle":
            list = list.filter((champion) =>
              champion.tags.some((tag) => jungle.includes(tag))
            )
            break
          case "adc":
            list = list.filter((champion) =>
              champion.tags.some((tag) => adc.includes(tag))
            )
            break
          case "support":
            list = list.filter((champion) =>
              champion.tags.some((tag) => support.includes(tag))
            )
            break
          default:
        }

        // filter by name
        list = list.filter((ch) =>
          ch.name.toLowerCase().includes(str.toLowerCase())
        )

        return list
      }
    },
  },
})
