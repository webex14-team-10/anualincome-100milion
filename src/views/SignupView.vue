<template>
  <div id="login">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="googleSignIn">Google Sign In</button>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    googleSignIn: function () {
      const provider = new db.auth.GoogleAuthProvider();
      db.auth()
        .signInWithPopup(provider)
        .then(() => {
          alert("Signed in!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
