<template>
  <div class="box26">
    <span class="box-title">詳細</span>
    <div>{{ this.$route.params.textarea }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.box26 {
  position: relative;
  margin: 2em 0;
  padding: 0.5em 1em;
  border: solid 3px #95ccff;
  border-radius: 8px;
}
.box26 .box-title {
  position: absolute;
  display: inline-block;
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  font-size: 19px;
  background: #fff;
  color: #95ccff;
  font-weight: bold;
}
.box26 p {
  margin: 0;
  padding: 0;
}
</style>
