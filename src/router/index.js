import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeComp from "@/components/HomeComp.vue";
import AboutComp from "@/components/AboutComp.vue";

const routes = [
  { path: "/home", component: HomeComp },
  { path: "/about", component: AboutComp },
  {path:"/", component: HelloWorld}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
