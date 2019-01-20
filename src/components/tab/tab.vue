<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/message">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/user">
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>