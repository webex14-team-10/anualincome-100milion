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

            <div class="hert">
              <div class="button_solid014">
                <a href="#" v-on:click="deleteinput(post)">消去ボタン</a>
              </div>
            </div>

            <div class="hert">
              <div class="button_solid014">
                <a href="#" v-on:click="test(post)">詳細を見る</a>
              </div>
            </div>

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
      let result = window.confirm("本当に消去しますか？");

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

<style scoped>
.content {
  background-color: white;
  text-align: center;
  background-color: #c9f1ee;
}
.memo {
  background-color: #bcebcb;
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
  margin: 3px auto;
  max-width: 220px;
  padding: 10px auto;
  color: #313131;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  box-shadow: 5px 5px 0 #a4b0f5;
  border-radius: 50px;
  text-decoration: none;
}
.button_solid014 a:hover {
  background-color: #a4b0f5;
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
  border: solid 1px rgb(31, 26, 26);
  border-radius: 50px;
  padding: 16px 10px 16px 20px;
  text-align: center;
  position: relative;
  color: rgb(24, 37, 34);
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
