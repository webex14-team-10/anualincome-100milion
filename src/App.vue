<template>
  <div class="test">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("https://jajaaan.co.jp/wp-content/uploads/2020/01/inside-sales.jpg")
    center / cover;
}
</style>
