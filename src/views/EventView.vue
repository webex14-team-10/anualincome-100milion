<template>
  <div>
    <div class="content">
      <div id="posts-wrapper">
        <hr />
        <h2>みんなの投稿</h2>
        <div id="form">
          <buttom>
            <router-link to="/eventform-view" class="form-text"
              >Eventを開催しよう</router-link
            >
          </buttom>
        </div>
      </div>
      <div id="posts-tweets">
        <ul class="posts__container">
          <li v-for="post in posttext" :key="post" class="memo">
            <div class="memo__text" v-bind:class="{ done: post }">
              {{ post.text }}
            </div>
            <button class="memo__delete" v-on:click="deleteinput(post)">
              削除
            </button>
            <button v-on:click="test(post)">詳細</button>
            <div class="hert">
              <div class="button_solid014">
                <a href="#" v-on:click="addStar(post)"
                  >いいねボタン&emsp;→&emsp;{{ post.Star }}</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <MyProfile />
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
      //テストで作る
      let result = window.confirm("ボタンをクリック！");

      if (result) {
        console.log("OKがクリックされました");
        var index = this.posttext.indexOf(post);
        this.posttext.splice(index, 1);
        console.log(post.id);
        await deleteDoc(doc(db, "event", post.id));
      } else {
        console.log("キャンセルがクリックされました");
        return;
      }

      //ここまで
    },
    async addStar(post) {
      console.log("keisi");
      await updateDoc(doc(db, "event", post.id), {
        Star: (post.Star += 1),
      });
    },
    test(post) {
      this.$router.push({
        name: "EventpropView",
        params: post,
      });
    },
  },
};
</script>

<style>
.content {
  text-align: center;
}
.memos {
  background-color: rgb(53, 206, 141);
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

.form-text {
  border: solid 1px #333;
  border-radius: 50px;
  padding: 16px 10px 16px 20px;
  text-align: center;
  position: relative;
  color: rgb(107, 163, 146);
}
.form-text::after {
  content: "";
  width: 8px;
  height: 8px;

  transform: rotate(45deg);
  position: absolute;
  margin-top: -4px;
  top: 50%;
  left: 110px;
}

.memo__text {
  font-size: 20px;
}
</style>
