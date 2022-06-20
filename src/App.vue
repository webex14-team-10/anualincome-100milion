<template>
  <div>
    <NavBar />
    <router-view />
    <div class="box"></div>
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
  margin: 0 15%;
  border: 1px solid #4464ad;
}
.box {
  height: 50px;
  background-color: #4464ad;
}
</style>
