<template>
  <div>
    <h1 class="home">Area Community</h1>
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
  font-size: 400%;
  font-family: "Sacramento", cursive;
}
h1 {
  background: #b0dcfa; /*背景色*/
  padding: 0.5em; /*文字周りの余白*/
  color: white; /*文字を白に*/
  border-radius: 0.5em; /*角の丸み*/
}
</style>
