<template>
  <div class="nav__bar">
    <div class="nav__logo nav__link nav__item">AreCon.</div>
    <div class="nav__items">
      <router-link to="/" class="nav__item nav__link">Home</router-link>
      <router-link to="/event-view" class="nav__item nav__link"
        >Event</router-link
      >
      <router-link to="/post-view" class="nav__item nav__link"
        >post</router-link
      >
    </div>
  </div>
</template>

<script>
//import {} from "firebase/auth";
</script>

<style scoped>
.nav__bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #87d68d;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #eee;
  text-decoration: none;
}
.nav__link:visited {
  color: #eee;
}
.nav__link:hover {
  font-weight: bold;
  color: #fff;
}
.nav__logo {
  width: 130px;
}
.nav__items {
  display: flex;
}
.nav__item {
  width: 100px;
  border-left: 1px solid #eee;
  font-size: 150%;
  font-family: "Kosugi", sans-serif;
}
</style>
