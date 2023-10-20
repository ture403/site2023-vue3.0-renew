import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import IntroView from "@/views/IntroView.vue";
import PortView from "@/views/PortView.vue";
import UnsplashView from "@/views/UnsplashView.vue";
import YoutubeView from "@/views/YoutubeView.vue";
import MovieView from "@/views/MovieView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/intro",
      name: "intro",
      component: IntroView,
    },
    {
      path: "/port",
      name: "port",
      component: PortView,
    },
    {
      path: "/unsplash",
      name: "unsplash",
      component: UnsplashView,
    },
    {
      path: "/youtube",
      name: "youtube",
      component: YoutubeView,
    },
    {
      path: "/movie",
      name: "movie",
      component: MovieView,
    },
  ]
})

export default router
