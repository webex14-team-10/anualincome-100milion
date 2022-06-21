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
  border: 1px solid #87d68d;
}
.box {
  height: 50px;
  background-color: #87d68d;
}
</style>
