<template>
  <div class="test">
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

.box {
  height: 50px;
  background-color: #87d68d;
}
</style>
