<template>
  <div class="home">
    <h1>大学生集まろう！</h1>
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
</style>
