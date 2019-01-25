<template>
  <div class="product-detail">
    <img class="image" :src="data.main_thumb_urls">
    <div class="product-info">
      <p>{{data.title}}</p>
      <p>{{data.subtitle}}</p>
      <p>￥{{data.default_price}}起</p>
    </div>
    <div class="package" @click="goPackage()">
      <p>选择：套餐类型/意向日期/人群</p>
      <img src="@/assets/btn_jiantou_xiao.png">
    </div>
    <div class="comment bg-white" @click="goComment()">
      <div class="comment-total">
        <p>玩家点评（52）</p>
        <p>
          查看全部
          <img src="@/assets/btn_jiantou_xiao_lv.png">
        </p>
      </div>
      <div class="comment-user">
        <p>
          <img src="@/assets/icon_wode_sel.png">薛*凝
        </p>
        <p>2018-11-20 15:32</p>
      </div>
      <div class="comment-content">性价比很高的一次高尔夫之旅哦，喜欢曼谷，入住 酒店、交通出行、美食享用、景点游玩都安排的…</div>
    </div>
    <div class="introduce">详情介绍</div>
    <div class="footer bg-white">
      <div class="botton bg-green" @click="reserve()">立即预定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      data: {
        point_name: "shanghai",
        days: 3,
        main_thumb_urls:
          "https://www.hole19golf.com/assets/course-profile-default_1-020faf6a99e5096c1e7432ee1da8401b0fd6957f7a6d431d7ea9fe09fe9bc732.jpg",
        creator: 1,
        create_time: "2019-01-07 12:12:12",
        status: 1,
        p_lat: 31.23122,
        p_lon: 123.3456,
        introduce: "this is first travel product introduce",
        way: "this is way of travel",
        feedetail: null,
        exceptions: "this is exception of travel product",
        title: "first travel",
        subtitle: "first travel in shanghai 3 days",
        default_price: 120,
        default_price_introduce: "标配行程价",
        default_price_title: "标配行程价",
        id: 1
      }
    };
  },
  methods: {
    goComment() {
      this.$router.push({
        path: "/commentList"
      });
    },
    reserve() {
      this.$router.push({
        path: "/orderConfirm"
      });
    },
    goPackage() {
      this.$router.push({
        path: "/productPackage"
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-detail .image {
  height: 232px;
  width: 100%;
}
.product-info {
  background: white;
  padding: 16px;
}
.product-info p:nth-child(1) {
  font-size: 18px;
  color: #383838;
  font-weight: 600;
}
.product-info p:nth-child(2) {
  color: #808080;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 8px;
}
.product-info p:nth-child(3) {
  font-size: 20px;
  color: #00c759;
  font-weight: 500;
}
.package {
  background: white;
  padding: 11px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.package p {
  font-size: 15px;
  color: #383838;
}
.package img {
  width: 16px;
  height: 16px;
}
.comment {
  margin-top: 10px;
  padding: 16px;
}
.comment-total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.comment-total p:nth-child(1) {
  font-size: 15px;
  color: #383838;
  font-weight: 600;
}
.comment-total p:nth-child(2) {
  font-size: 11px;
  color: #00c759;
  display: flex;
  align-items: center;
}
.comment-total p:nth-child(2) img {
  width: 12px;
  height: 12px;
}
.comment-user {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
}
.comment-user p:nth-child(1) img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.comment-user p:nth-child(1) {
  color: #808080;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.comment-user p:nth-child(2) {
  font-size: 12px;
  color: #808080;
}
.comment-content {
  font-size: 15px;
  color: #383838;
  margin-top: 10px;
}
.introduce {
  padding: 18px 16px;
  background: white;
  margin-top: 10px;
  margin-bottom: 70px;
}
.footer {
  height: 63px;
}
.botton {
  height: 47px;
  margin: 8px 16px;
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
