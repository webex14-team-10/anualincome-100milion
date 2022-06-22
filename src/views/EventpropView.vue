<template>
  <div>
    {{ this.$route.params.textarea }}
  </div>
</template>

<script>
export default {
  props: ["params"],
  data() {
    return {};
  },
  methods: {},
};
</script>
