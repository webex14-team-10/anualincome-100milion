<template>
  <div class="logout">
    <button @click="signOut">ログアウト</button>
  </div>
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
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.logout {
  height: 50px;
  display: flex;
}
</style>
