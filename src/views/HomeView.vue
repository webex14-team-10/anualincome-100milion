<template>
  <div class="home">
    <h1>大学生集まろう！</h1>
    <p v-if="show"><SingIn /></p>
    <p v-show="show"><SingOut /></p>
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
  data: function () {
    return {
      show: true,
    };
  },
  methods: {
    click: function () {
      this.show = !this.show;
    },
  },
};
</script>
<style>
.home {
  text-align: center;
}
</style>
