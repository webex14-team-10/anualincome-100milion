<template>
  <div id="form-wrapper">
    <h1>Form</h1>

    <!-- <transition name="post-alert">
      <b-alert v-show="post_message" variant="success" show
        >内容が投稿されました！</b-alert
      >
    </transition> -->
    <!-- <transition name="post-validataion">
      <b-alert v-show="post_validation" variant="danger" show
        >内容を入力して下さい</b-alert
      >
    </transition> -->
    <div class="cord">
      <h2>開催するイベント内容を表示してください！</h2>
      <img
        src="../assets/ホームパーティ画像.jpeg"
        class="cord-img"
        width="450"
        height="300"
      />
      <div class="add-tweets-div">
        <input
          class="add-tweets-input"
          v-model="textInput"
          placeholder="題名をかいてくだざい"
        /><br />
        <textarea
          class="add-twewts-textarea"
          v-model="textarea"
          placeholder="ここに詳細を書いてください"
        ></textarea>
      </div>
      <div class="sub">
        <div class="button_solid014s">
          <a href="#" v-on:click="pushinput">GO!</a>
          <h2><router-link to="/event-view">←</router-link></h2>
        </div>
        <!-- <button class="add-tweets-button" v-on:click="pushinput">追加</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase.js";

export default {
  data() {
    return {
      textInput: "",
      textarea: "",
    };
  },
  methods: {
    pushinput() {
      if (this.textInput === "" || this.textarea === "") {
        window.alert("記入してください");
        return;
      } else {
        var todo = {
          text: this.textInput,
          textarea: this.textarea,
          Star: 0,
        };
        console.log(todo);
        this.textInput = "";
        this.textarea = "";
        addDoc(collection(db, "event"), todo);
      }
    },
  },
};
</script>
<style scoped>
#form-wrapper {
  text-align: center;
}
img {
  margin-top: 30px;
  margin-bottom: 20px;
}

.add-tweets-input {
  width: 200px;
  height: 40px;
  margin-bottom: 10px;
}
.add-twewts-textarea {
  display: block;
  margin: 0 auto;
  width: 400px;
  height: 200px;
  margin-bottom: 20px;
}

.button_solid014s a {
  background: #eee;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100px;
  padding: 10px auto;
  color: #313131;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  box-shadow: 5px 5px 0 #6bb6ff;
  border-radius: 50px;
  text-decoration: none;
}
.button_solid014s a:hover {
  background-color: #b3d9ff;
  box-shadow: 0 0 0;
  transform: translate(5px, 5px);
}
.button_solid014s a:after {
  position: absolute;
  top: 50%;
  right: 20px;
  transition: 0.2s ease-in-out;

  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  transform: translateY(-50%);
}
</style>
