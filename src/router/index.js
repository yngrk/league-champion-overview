import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/Home/View.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/champion/:championId",
      name: "champion",
      component: () => import("@/views/Champion/View.vue"),
      props: true,
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/TestingView.vue"),
    },
  ],
})

export default router
