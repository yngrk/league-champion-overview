import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home/View.vue"
import TestingView from "@/views/TestingView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/test",
      name: "test",
      component: TestingView,
    },
  ],
})

export default router
