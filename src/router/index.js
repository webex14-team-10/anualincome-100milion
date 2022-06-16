import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import FormView from "../views/FormView.vue";
import EventpropView from "../views/EventpropView.vue";
import EventView from "../views/EventView.vue";
import EventFormView from "../views/EventFormView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
    props: true,
  },
  {
    path: "/eventform-view",
    name: "EventFormView",
    component: EventFormView,
  },
  {
    path: "/eventpropView.vue",
    name: "EventpropView",
    component: EventpropView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
