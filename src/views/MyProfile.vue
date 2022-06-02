<template>
  <div class="profile">
    <h1>This is an my profile page</h1>
  </div>
  <div>
    <div>
      ニックネーム
      <input type="text" v-model="userName" />
    </div>
    <div>
      地域
      <input type="text" v-model="userArea" />
    </div>
    <div>アイコン画像選択</div>
    <div>
      一言コメント
      <input type="text" v-model="userCommnet" />
    </div>
    <div>
      その他あなたに関する情報
      <input type="text" />
    </div>
  </div>
</template>
