<template>
  <div class="home">
    <SingIn />
    <SingOut />
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
};
</script>
