<template>
  <div id="posts-wrapper">
    <hr />
    <h2>みんなの投稿</h2>
    <div id="form">
      <buttom
        ><router-link to="/form-view" class="form-text">+</router-link></buttom
      >
    </div>
  </div>

  <div id="posts-teets">
    <ul class="posts__container">
      <li v-for="post in posttext" :key="post" class="memo">
        <div class="memo__text">
          {{ post.data.text }}
        </div>
        <button class="memo__delete" v-on:click="deleteinput(todo)">
          削除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.js";
export default {
  data() {
    return {
      posttext: [],
      textInput: "",
    };
  },
  async created() {
    await getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.posttext.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
  },
  methods: {},
};
</script>

<style>
li {
  list-style: none;
}
.form-text {
  text-decoration: none;
}
</style>
