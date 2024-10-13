import { createRouter, createWebHistory } from "vue-router"
import HomePage from "./pages/homePage.vue"
import AboutPage from "./pages/aboutPage.vue"
import ErrorPage from "./pages/errorPage.vue"

const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: ErrorPage,
    },
  ],
})

export default routers
