<template>
  <div>
    <div class="bg-white star-content">
      <div class="star-bar">
        <p>线路</p>
        <star-list/>
      </div>
      <div class="star-bar">
        <p>酒店</p>
        <star-list/>
      </div>
      <div class="star-bar">
        <p>球场</p>
        <star-list/>
      </div>
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
import StarList from "@/base/star-list";
export default {
  name: "Comment",
  data() {
    return {
      routeNum: 1,
      hotelNum: 1,
      courtNum: 1
    };
  },
  components: {
    StarList
  },
  methods: {
    submit() {
      this.$router.push({
        path: "/orderList"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.star-content {
  padding: 20px 16px;
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
.star-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.star-bar p {
  color: #383838;
  font-size: 15px;
  margin-right: 15px;
}
</style>
