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
        <div class="memo__text" v-bind:class="{ done: post }">
          {{ post.data.text }}
        </div>
        <button class="memo__delete" v-on:click="deleteinput(post)">
          削除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
<<<<<<< HEAD
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";

import { db } from "@/firebase.js";
=======
import { collection, getDocs } from "firebase/firestore";
import { db } from "/Users/ichidakeiji/webex/anualincome-100milion/src/firebase.js";
>>>>>>> parent of d0685f3 (完成？)
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
  methods: {
    async deleteinput(post) {
      var index = this.posttext.indexOf(post);

      this.posttext.splice(index, 1);
      console.log(post.id);
      await deleteDoc(doc(db, "tweets", post.id));
    },
  },
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
