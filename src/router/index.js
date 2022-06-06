import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyProfile from "../views/MyProfile.vue";
import PostView from "../views/PostView.vue";
import FormView from "../views/FormView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/my-profile",
    name: "MyProfile",
    component: MyProfile,
  },
  {
    path: "/post-view",
    name: "PostView",
    component: PostView,
  },
  {
    path: "/form-view",
    name: "FormView",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
