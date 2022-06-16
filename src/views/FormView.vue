<template>
  <div id="form-wrapper">
    <h1>Form</h1>

    <div class="add-tweets-div">
      <input
        class="add-tweets-input"
        type="text"
        v-model="textInput"
        placeholder="意見を入れる"
      />
      <div class="button_solid014s">
        <a href="#" v-on:click="pushinput">GO!</a>
        <h2><router-link to="/post-view">←</router-link></h2>
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
<style>
#form-wrapper {
  text-align: center;
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
