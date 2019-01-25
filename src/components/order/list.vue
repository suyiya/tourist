<template>
  <div>
    <div class="nav-bar">
      <div class="nav-item" @click="changeNav(1)">
        <p :class="navType==1?'selected':''">全部</p>
      </div>
      <div class="nav-item" @click="changeNav(2)">
        <p :class="navType==2?'selected':''">待支付</p>
      </div>
      <div class="nav-item" @click="changeNav(3)">
        <p :class="navType==3?'selected':''">已完成</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      navType: 1
    };
  },
  methods: {
    changeNav(index) {
      this.navType = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  height: 40px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.nav-item {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item p {
  line-height: 40px;
  font-size: 13px;
  color: #383838;
}
.nav-item .selected {
  color: #00c759;
  border-bottom: 2px solid #00c759;
}
</style>
