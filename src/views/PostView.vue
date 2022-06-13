<template>
  <div class="content">
    <div id="posts-wrapper">
      <hr />
      <h2>みんなの投稿</h2>
      <div id="form">
        <buttom
          ><router-link to="/form-view" class="form-text"
            >+</router-link
          ></buttom
        >
      </div>
    </div>

    <div id="posts-teets">
      <ul class="posts__container">
        <li v-for="post in posttext" :key="post">
          <div class="memo">
            <div class="memo__text" v-bind:class="{ done: post }">
              {{ post.text }}
            </div>
            <button class="memo__delete" v-on:click="deleteinput(post)">
              削除
            </button>
            <div class="memo-bar">
              <div class="hert">
                <div class="button_solid014">
                  <a href="#" v-on:click="addStar(post)"
                    >いいねボタン&emsp;→&emsp;{{ post.Star }}</a
                  >
                </div>

                <!-- <button v-on:click="addStar(post)">🦷</button> -->
                <div class="like"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

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
  methods: {
    async deleteinput(post) {
      var index = this.posttext.indexOf(post);

      this.posttext.splice(index, 1);
      console.log(post.id);
      await deleteDoc(doc(db, "tweets", post.id));
    },
    async addStar(post) {
      console.log("keisi");
      await updateDoc(doc(db, "tweets", post.id), {
        Star: (post.Star += 1),
      });
    },
  },
};
</script>

<style>
.content {
  text-align: center;
}
.memo {
  background-color: rgb(199, 254, 190);
  margin: 20px 50px;
  border-radius: 30px;
}

li {
  list-style: none;
}

ul {
  margin-left: -40px;
}
.form-text {
  text-decoration: none;
}

.button_solid014 a {
  background: #eee;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 220px;
  padding: 10px auto;
  color: #313131;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  box-shadow: 5px 5px 0 #6bb6ff;
  border-radius: 50px;
  text-decoration: none;
}
.button_solid014 a:hover {
  background-color: #b3d9ff;
  box-shadow: 0 0 0;
  transform: translate(5px, 5px);
}
.button_solid014 a:after {
  position: absolute;
  top: 50%;
  right: 20px;
  transition: 0.2s ease-in-out;

  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  transform: translateY(-50%);
}
</style>
