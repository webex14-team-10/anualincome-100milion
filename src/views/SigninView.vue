<template>
  <div class="links">
    <a v-if="isAuth" @click="signOut" class="button--grey">signOut</a>
    <a v-else @click="signIn" class="button--green">signIn</a>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
export default {
  methods: {
    signIn: function () {
      const provider = new db.auth.GoogleAuthProvider();
      db.auth().signInWithRedirect(provider);
    },
  },
  asyncData() {
    return {
      isAuth: false,
    };
  },
  mounted: function () {
    db.auth().onAuthStateChanged((user) => (this.isAuth = !!user));
  },
};
</script>
