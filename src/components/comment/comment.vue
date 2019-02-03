<template>
  <div>
    <div class="bg-white star-content">
      <div class="star-bar">
        <p>线路</p>
        <star-list v-on:getNum="getRouteNum"/>
      </div>
      <div class="star-bar">
        <p>服务</p>
        <star-list v-on:getNum="getServiceNum"/>
      </div>
      <!-- <div class="star-bar">
        <p>球场</p>
        <star-list v-on:getNum="getCourtNum"/>
      </div> -->
    </div>
    <div class="comment">
      <textarea v-model="content" placeholder="您的评价会帮助其他球友了解这个套餐"/>
    </div>
    <div class="submit">
      <div class="bg-green" @click="submit()">提交</div>
    </div>
  </div>
</template>

<script>
import StarList from "@/base/star-list";
import { Toast } from "mint-ui";
import { commentTravel } from "@/middleware/comment";
export default {
  name: "Comment",
  data() {
    return {
      routeNum: 1,
      serviceNum: 1,
      courtNum: 1,
      content: ""
    };
  },
  components: {
    StarList
  },
  methods: {
    submit() {
      if (!this.content || this.content.length < 2) {
        Toast("请输入评价内容！");
        return;
      }
      let params ={

      }
      this._commentTravel();
      this.$router.push({
        path: "/orderList"
      });
    },
    getRouteNum(num) {
      console.log(num);
      this.routeNum = num;
    },
    getServiceNum(num) {
      console.log(num);
      this.hotelNum = num;
    },
    getCourtNum(num) {
      console.log(num);
      this.courtNum = num;
    },
    _commentTravel() {
      commentTravel().then(res => {
        console.log(res);
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
  padding: 10px 16px;
}

.comment textarea {
  height: 100%;
  width: 100%;
  font-size: 17px;
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
