<template>
  <button @click="signOut">ログアウト</button>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("ログアウト");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
