<template>
  <h1>Form</h1>
  <h2><router-link to="/post-view">←</router-link></h2>
  <div class="add-tweets-div">
    <input class="add-tweets-input" type="text" v-model="textInput" />
    <button class="add-tweets-button" v-on:click="pushinput">追加</button>
  </div>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase.js";

export default {
  data() {
    return {
      textInput: "",
    };
  },
  methods: {
    pushinput() {
      if (this.textInput === "") {
        return;
      } else {
        var todo = {
          text: this.textInput,
          Star: 0,
        };
        console.log(todo);
        this.textInput = "";
        addDoc(collection(db, "tweets"), todo);
      }
    },
  },
};
</script>
