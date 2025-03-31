import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeComp from "@/components/HomeComp.vue";
import AboutComp from "@/components/AboutComp.vue";
import SettingsComp from "@/components/SettingsComp.vue";
import ProfileComp from "@/components/ProfileComp.vue";
import ContactusComp from "@/components/ContactusComp.vue";
import LoginComp from "@/components/LoginComp.vue";

const routes = [
  { path: "/home",
     component: HomeComp ,
     children: [
      { path: "/settings", component: SettingsComp },
      { path: "/profile", component: ProfileComp },
    ],

  },
  { path: "/about", component: AboutComp },
  {path:"/", component: HelloWorld},
  {path: "/contact" , component: ContactusComp},
  {path: "/signup" , component: LoginComp}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
