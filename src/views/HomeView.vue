<template>
  <div class="home">
    <h1 class="title">Area Community</h1>
    <p class="content1">ここから新しい運命が始まる！</p>
    <p class="content2">↓ログインボタンをクリックだ ↓</p>
    <p v-on:click="click" v-if="show"><SingIn /></p>
    <p v-on:click="click" v-else><SingOut /></p>
  </div>
</template>

<script>
// @ is an alias to /src
import SingIn from "@/components/SingIn.vue";
import SingOut from "@/components/SingOut.vue";
export default {
  name: "HomeView",
  components: {
    SingIn,
    SingOut,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    click: function () {
      this.show = false;
    },
  },
};
</script>
<style>
.home {
  text-align: center;
}
.title {
  font-size: 700%;
  font-family: "Sacramento", cursive;
}
h1 {
  background: #b0dcfa; /*背景色*/
  padding: 0.5em; /*文字周りの余白*/
  color: white; /*文字を白に*/
  border-radius: 0.5em; /*角の丸み*/
}
.content1 {
  font-size: 40px;
  color: #2f4f4f;
  font-family: "Sawarabi Gothic", sans-serif;
}
.content2 {
  font-size: 20px;
  color: #191970;
  font-family: "Noto Sans JP", sans-serif;
}
</style>
