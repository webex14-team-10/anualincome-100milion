import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyProfile from "../views/MyProfile.vue";
import PostView from "../views/PostView.vue";
import FormView from "../views/FormView.vue";
<<<<<<< HEAD
import Signup from "../views/SignupView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EventView from "../views/EventView.vue";
import EventFormView from "../views/EventFormView.vue";
=======
>>>>>>> parent of d0685f3 (完成？)

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
