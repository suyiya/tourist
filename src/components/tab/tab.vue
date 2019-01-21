<template>
  <div class="footer">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/">
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/message">
        <span class="tab-link">消息</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/user">
        <span class="tab-link">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
}
.tab {
  display: flex;
  height: 50px;
  background-color: #ffffff;
  line-height: 50px;
}
.tab-item {
  flex: 1;
  text-align: center;
}
</style>