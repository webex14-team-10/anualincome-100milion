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
.test {
  background-color: #c9f1ee;
}
</style>
