<template>
  <div>
    <div class="mt10 pd16 bg-white">
      <div class="top">
        <div class="user-info">
          <img class="avatar">
          <span class="name">韩*桦</span>
        </div>
        <div class="date">2018-01-01 12:12</div>
      </div>
      <div class="content">清迈风景很美，行程安排也不错，无论是领队、导游的服务、讲解清楚、住宿安排、餐饮与交通等方面我们都非常满意。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.user-info {
  display: flex;
  align-items: center;
}
.avatar {
  width: 24px;
  height: 24px;
  background: green;
  border-radius: 50%;
}
.name {
  margin-left: 8px;
  color: #808080;
  font-size: 14px;
}
.date {
  color: #808080;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.content {
  margin-top: 10px;
  font-size: 16px;
  color: #383838;
}
</style>
