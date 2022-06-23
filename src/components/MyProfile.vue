<template>
  <div class="profile">
    <h1>my profile page</h1>

    <div class="content1">
      <img :src="displayPicture" class="cord-img" />
      <div>
        アイコン画像選択
        <button
          v-for="image in images"
          :key="image.index"
          @click="selectPicture(image)"
        >
          <img :src="image.src" alt="" class="select-img" />
        </button>
      </div>

      <div>
        Name :
        <input type="text" v-model="userInfomation.userName" />
      </div>
      <div class="area__select">
        Prefecture :
        <select
          id="shop_pref"
          name="input_pref"
          class="form-control input-lg"
          v-model="userInfomation.userArea"
        >
          <option value="">都道府県選択</option>
          <option v-for="item in prefectures" v-bind:key="item.prefCode">
            {{ item.prefName }}
          </option>
        </select>
      </div>

      <div>
        Comments :
        <input type="text" v-model="userInfomation.userComment" />
      </div>
      <div>
        Information :
        <input type="text" v-model="userInfomation.userInfo" />
      </div>
    </div>
    <button v-on:click="userInfomationSave">保存</button>

    <button v-on:click="confirmBtn">開発用の確認ボタン</button>
  </div>
</template>

<script>
import axios from "axios";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      prefectures: null,
      userInfomation: { userPicture: "" },
      a: { name: "aaa" },
      images: [
        { index: 0, src: require("../assets/cat.png"), category: "Dog" },
        { index: 1, src: require("../assets/dog.png"), category: "Cat" },
        { index: 2, src: require("../assets/flog.png"), category: "Dog" },
        { index: 3, src: require("../assets/rabit.png"), category: "Cat" },
        { index: 4, src: require("../assets/fish.png"), category: "Cat" },
      ],
      displayPicture: "",
    };
  },
  async created() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      await getDoc(doc(db, "users", user.uid))
        .then((snapshot) => {
          if (snapshot.exists) {
            this.userInfomation = snapshot.data();
          }
        })
        .then(() => {
          console.log(this.userInfomation);
          this.displayPicture =
            this.images[this.userInfomation.userPicture].src;
        });
    });
  },
  methods: {
    userInfomationSave() {
      console.log(this.userInfomation);
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        await setDoc(doc(db, "users", user.uid), this.userInfomation);
      });
      alert("保存完了");
    },
    selectPicture(image) {
      this.userInfomation.userPicture = image.index;
      console.log(this.userInfomation.userPicture);
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        await setDoc(doc(db, "users", user.uid), this.userInfomation);
      });
      this.displayPicture = this.images[this.userInfomation.userPicture].src;
    },
    selectPicture(image) {
      this.userInfomation.userPicture = image.index;
      console.log(this.userInfomation.userPicture);
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        await setDoc(doc(db, "users", user.uid), this.userInfomation);
      });
      this.displayPicture = this.images[this.userInfomation.userPicture].src;
    },
    confirmBtn() {
      console.log(this.a);
    },
  },
  mounted() {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": "nMkLzHbdeIGmtqnCJROChntAAaQcbJWUU7sarj2V" },
      })
      .then((response) => (this.prefectures = response.data.result));
  },
};
</script>

<style scoped>
.profile {
  text-align: center;
  background-color: rgb(199, 254, 190);
  margin: 20px 50px;
  padding: 30px;
  border-radius: 30px;
}
.area__select {
  text-align: center;
}
.content1 {
  font-size: 15px;
  color: #2f4f4f;
  font-family: "Sawarabi Gothic", sans-serif;
}
h1 {
  font-family: "Sacramento", cursive;
  font-size: 40px;
}
.cord-img {
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  width: 180px; /* ※縦横を同値に */
  height: 180px; /* ※縦横を同値に */
}
.select-img {
  border-radius: 50%; /* 角丸半径を50%にする(=円形にする) */
  width: 50px; /* ※縦横を同値に */
  height: 50px; /* ※縦横を同値に */
}
</style>
