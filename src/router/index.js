import { createRouter, createWebHistory } from "vue-router";
import MyProfile from "../views/MyProfile.vue";
import PostView from "../views/PostView.vue";
import FormView from "../views/FormView.vue";
import Signup from "../views/SignupView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EventView from "../views/EventView.vue";
import EventFormView from "../views/EventFormView.vue";

const routes = [
  {
    path: "/",
    name: "Signup",
    component: Signup,
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
    meta: {
      requireAuth: true,
    },
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },

      reject
    );
  });
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  }
});

export default router;
