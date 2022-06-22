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
  margin: 0 15%;
  background-color: #eaf5f4;
}
.box {
  height: 50px;
}
</style>
