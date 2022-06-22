<template>
  <div class="logout btn-wrap">
    <p class="btn btn-switch">
      <button @click="signOut" class="button">ログアウト</button>
    </p>
  </div>
</template>
<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("ログアウト");
          open("about:blank", "_self").close();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.logout {
  text-align: center;
  padding: 20px;
  height: 100px;
}
.button {
  width: 10em;
  height: 3em;
  border: none;
  outline: none;
  background: transparent;
  font-size: 150%;
  font-family: "Kosugi", sans-serif;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
}
.btn,
p.btn,
button.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}
/*背景*/
.btn-wrap {
  margin: 20px;
}

p.btn-switch {
  color: #333;
  border: 1px solid #ddd;
  border-radius: 100vh;
  background: #fbfbfc;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fbfbfc),
    to(#dcddde)
  );
  background: -webkit-linear-gradient(top, #fbfbfc 0%, #dcddde 100%);
  background: linear-gradient(180deg, #fbfbfc 0%, #dcddde 100%);
  -webkit-box-shadow: -1px -5px 6px rgba(0, 0, 0, 0.2), 3px 3px 5px white,
    0 10px 10px rgba(0, 0, 0, 0.1), inset 0 -4px 5px rgba(0, 0, 0, 0.1);
  box-shadow: -1px -5px 6px rgba(0, 0, 0, 0.2), 3px 3px 5px white,
    0 10px 10px rgba(0, 0, 0, 0.1), inset 0 -4px 5px rgba(0, 0, 0, 0.1);
}

p.btn-switch span {
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

p.btn-switch:hover {
  -webkit-box-shadow: -1px -5px 6px rgba(0, 0, 0, 0.2), 3px 3px 5px white,
    0 10px 10px rgba(0, 0, 0, 0.1), inset 0 -4px 5px rgba(0, 0, 0, 0.1),
    inset 0 3px 3px rgba(0, 0, 0, 0.18);
  box-shadow: -1px -5px 6px rgba(0, 0, 0, 0.2), 3px 3px 5px white,
    0 10px 10px rgba(0, 0, 0, 0.1), inset 0 -4px 5px rgba(0, 0, 0, 0.1),
    inset 0 3px 3px rgba(0, 0, 0, 0.18);
}

p.btn-switch:hover span {
  -webkit-transform: scale(0.96);
  transform: scale(0.96);
}
</style>
