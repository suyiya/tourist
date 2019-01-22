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
.mt10 {
  margin-top: 10px;
}
p {
  padding: 0;
  margin: 0;
}
.bg-green {
  background-color: #00d16b;
}
.c-green {
  color: #00d16b;
}

.footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
}
</style>
