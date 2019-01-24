<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./common/style/common.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  background-color: #f7f7f7;
}

input {
  -webkit-appearance : none;
  border: none;
}
textarea {
  -webkit-appearance : none;
  border: none;
}
.footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
}
</style>
