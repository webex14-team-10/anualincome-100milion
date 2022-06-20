<template>
  <div class="login">
    <button @click="signIn">ログイン</button>
  </div>
</template>
<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  methods: {
    signIn() {
      const provider = new GoogleAuthProvider();
      provider.addScope("");
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          credential.accessToken;
          result.user;
          alert("ログイン成功");
        })
        .catch((error) => {
          GoogleAuthProvider.credentialFromError(error);
          console.log(error);
        });
    },
  },
};
</script>
