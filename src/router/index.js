import { createRouter, createWebHistory } from "vue-router";
import MyProfile from "../views/MyProfile.vue";
import PostView from "../views/PostView.vue";
import FormView from "../views/FormView.vue";
import Signin from "../views/SigninView.vue";
import EventView from "../views/EventView.vue";
import EventFormView from "../views/EventFormView.vue";

const routes = [
  {
    path: "/",
    name: "Signin",
    component: Signin,
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
  {
    path: "/event-view",
    name: "EventView",
    component: EventView,
  },
  {
    path: "/eventform-view",
    name: "EventFormView",
    component: EventFormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
