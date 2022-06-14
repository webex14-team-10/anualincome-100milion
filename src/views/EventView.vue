<template>
  <div>
    <div id="posts-wrapper">
      <hr />
      <h2>みんなの投稿</h2>
      <div id="form">
        <buttom
          ><router-link to="/eventform-view" class="form-text"
            >+</router-link
          ></buttom
        >
      </div>
    </div>

    <div id="posts-tweets">
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
    <MyProfile />
  </div>
</template>

<script>
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase.js";

import MyProfile from "@/components/MyProfile.vue";

export default {
  components: {
    MyProfile,
  },
  data() {
    return {
      posttext: [],
      textInput: "",
    };
  },
  async created() {
    await getDocs(collection(db, "event")).then((snapshot) => {
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
      await deleteDoc(doc(db, "event", post.id));
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
