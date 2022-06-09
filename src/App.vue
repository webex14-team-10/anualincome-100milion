<template>
<<<<<<< HEAD
  <router-link to="/">Login</router-link>
  <button @click="handleSignOut" v-if="isLoggedIn">ログアウト</button>
  <div>
    <div>app</div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, singOut } from "firebase/auth";
import router from "./router";
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

export default {
  components: {
    NavBar,
  },
  methods: {
    handleSignOut() {
      singOut(auth).then(() => {
        router.push("/");
      });
    },
  },
};
</script>

=======
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/my-profile">MyProfile</router-link> |
    <router-link to="/post-view">post</router-link>
  </nav>
  <router-view />
</template>

>>>>>>> parent of d0685f3 (完成？)
<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
</style>
