<template>
  <div class="profile">
    <h1>my profile page</h1>

    <div>
      <div>アイコン画像選択</div>
      <div>
        Name :
        <input type="text" v-model="userNameInput" />
      </div>
      <div class="area__select">
        Prefecture :
        <select
          id="shop_pref"
          name="input_pref"
          class="form-control input-lg"
          v-model="userAreaInput"
        >
          <option value="">都道府県選択</option>
          <option v-for="item in prefectures" v-bind:key="item.prefCode">
            {{ item.prefName }}
          </option>
        </select>
      </div>

      <div>
        Comments :
        <input type="text" v-model="userCommentInput" />
      </div>
      <div>
        Information :
        <input type="text" v-model="userInfoInput" />
      </div>
    </div>
    <button v-on:click="userInfomationSave">保存</button>
    //*開発上の確認ボタン
    <button v-on:click="confirmBtn">oooo</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //APIデータを受け取る配列を定義
      prefectures: null,
      userInfomation: [],
      a: 0,
    };
  },
  methods: {
    userInfomationSave() {
      this.userInfomation = [];
      this.userInfomation.push({
        userName: this.userNameInput,
        userArea: this.userAreaInput,
        userComment: this.userCommentInput,
        userInfo: this.userInfoInput,
      });
      console.log(this.userInfomation);
    },
    confirmBtn() {
      console.log(this.prefectures);
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
</style>
