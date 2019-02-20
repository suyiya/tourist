<template>
  <div class="product-detail">
    <img class="image" :src="data.main_thumb_urls">
    <div class="product-info">
      <p>{{data.title}}</p>
      <p>{{data.subtitle}}</p>
      <p>￥{{data.default_price}}起</p>
    </div>
    <div class="package" @click="goPackage()">
      <p>选择：{{packageText}}</p>
      <img src="@/assets/btn_jiantou_xiao.png">
    </div>
    <div class="comment bg-white">
      <div class="comment-total">
        <p>玩家点评</p>
        <p @click="goComment()">
          查看全部
          <img src="@/assets/btn_jiantou_xiao_lv.png">
        </p>
      </div>
      <div class="comment-user">
        <p>
          <img :src="comment.comment_thumb">
          {{comment.comment_uname}}
        </p>
        <p>{{comment.create_time}}</p>
      </div>
      <div class="comment-content">{{comment.comments}}</div>
    </div>
    <div class="introduce">
      <div class="title">
        <div :class="introIndex==0?'selected':''" @click="selectIntro(0)">详情介绍</div>
        <div :class="introIndex==1?'selected':''" @click="selectIntro(1)">预定须知</div>
      </div>
      <div class="container" v-if="introIndex==0">
        <div class="con-title">
          <div class="longLine"></div>
          <div>详情介绍</div>
        </div>
      </div>
      <div class="container" v-if="introIndex!=0">
        <div class="con-title">
          <div class="longLine"></div>
          <div>预定须知</div>
        </div>
      </div>
    </div>
    <div class="footer bg-white">
      <div class="botton bg-green" @click="reserve()">立即预定</div>
    </div>
  </div>
</template>

<script>
import { getTravelProductInfo } from "@/middleware/product";
import { getTravelProductComments } from "@/middleware/comment";
export default {
  name: "ProductDetail",
  data() {
    return {
      introIndex: 0,
      packageText: "套餐类型/意向日期/人群",
      comment: {
        travel_type: 0,
        tid: 1,
        torder_id: 1,
        comments: "It's good for me!",
        service_stars: 5,
        way_stars: 4,
        comments_uid: 18,
        create_time: "2019-01-08 20:47:18",
        comments_pic_urls: "",
        comment_uname: "韩*桦1",
        comment_thumb: "",
        id: 1
      },
      data: {}
    };
  },
  created() {
    this._getTravelProductInfo();
    this._getTravelProductComments();
  },
  mounted() {
    this.setPackage();
  },
  methods: {
    /**
     * 获取产品信息
     */
    _getTravelProductInfo() {
      let params = {
        tid: this.$route.query.id
      };
      getTravelProductInfo(params).then(res => {
        console.log(res.data);
        this.data = res.data;
      });
    },
    /**
     * 获取评价列表
     */
    _getTravelProductComments() {
      let params = {
        travelId: this.$route.query.id
      };
      getTravelProductComments(params)
        .then(res => {
          let travelCommentsList = res.data.travelCommentsList;
          console.log(travelCommentsList);
          if (travelCommentsList.length > 0) {
            this.comment = travelCommentsList[0];
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    setPackage() {
      let query = this.$route.query;
      if (query.amount) {
        this.packageText = `${query.p_title}/${query.time}/${query.amount}`;
      } else {
        this.packageText = "套餐类型/意向日期/数量";
      }
    },
    goComment() {
      this.$router.push({
        path: "/commentList",
        query: {
          id: this.$route.query.id
        }
      });
    },

    /**
     * 预定
     */
    reserve() {
      let query = this.$route.query;
      if (query.amount) {
        this.$router.push({
          path: "/orderConfirm",
          query: {
            ...this.$route.query,
            imageUrl: this.data.main_thumb_urls,
            title: this.data.title
          }
        });
      } else {
        this.$router.push({
          path: "/productPackage"
        });
      }
    },
    /**
     * 选择套餐
     */
    goPackage() {
      this.$router.push({
        path: "/productPackage",
        query: this.$route.query
      });
    },
    /**
     * 选择详情说明
     */
    selectIntro(index) {
      this.introIndex = index;
    }
  },
  watch: {
    "$route.query"() {
      // console.log('$route.query')
    }
  }
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
.introduce .title {
  display: flex;
  flex-direction: row;
  border: 1px solid #383838;
  border-radius: 4px;
  overflow: hidden;
}
.introduce .title div {
  display: flex;
  flex: 1;
  justify-content: center;
  height: 34px;
  line-height: 34px;
  background: white;
  font-size: 13px;
  color: #383838;
}
.introduce .title .selected {
  background: #383838;
  color: white;
}
.introduce .container {
  margin-top: 26px;
}
.con-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #383838;
  font-size: 18px;
}
.longLine {
  width: 3px;
  height: 18px;
  background: #00c759;
  margin-right: 8px;
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
