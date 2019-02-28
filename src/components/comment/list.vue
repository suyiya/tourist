<template>
  <div>
    <div :key="item.torder_id" v-for="item in travelCommentsList" class="mt10 pd16 bg-white">
      <div class="top">
        <div class="user-info">
          <img :src="item.comment_thumb" class="avatar">
          <span class="name">{{item.comment_uname}}</span>
        </div>
        <div class="date">{{item.create_time}}</div>
      </div>
      <div class="content">{{item.comments}}</div>
    </div>
  </div>
</template>

<script>
import { getTravelProductComments } from "@/middleware/comment";
import { Indicator } from "mint-ui";
export default {
  name: "CommentList",
  data() {
    return {
      travelCommentsList: []
    };
  },
  components: {},
  created() {
    this._getTravelProductComments();
  },
  methods: {
    _getTravelProductComments() {
      Indicator.open();
      let params = {
        travelId: this.$route.query.id
      };
      getTravelProductComments(params)
        .then(res => {
          console.log(res);
          let travelCommentsList = res.data.travelCommentsList || [];
          this.travelCommentsList = travelCommentsList;
          Indicator.close();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
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
