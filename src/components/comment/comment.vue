<template>
  <div>
    <div class="bg-white star-content">
      <div>球场</div>
    </div>
    <div class="comment">
      <textarea placeholder="您的评价会帮助其他球友了解这个套餐"/>
    </div>
    <div class="submit">
      <div class="bg-green" @click="submit()">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {},
  methods: {
    submit() {
      this.$router.push({
        path: "/orderDetail"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.star-content {
  height: 154px;
}
.comment {
  height: 80px;
  margin-top: 10px;
  background: white;
  overflow: hidden;
}

.comment textarea {
  height: 100%;
  width: 100%;
  padding: 10px 16px 0 16px;
}
.submit {
  padding: 30px 20px;
}
.submit div {
  height: 47px;
  width: 100%;
  color: #ffffff;
  font-size: 18px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
