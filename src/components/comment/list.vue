<template>
  <div>
    <div :key="item.tid" v-for="item in travelCommentsList" class="mt10 pd16 bg-white">
      <div class="top">
        <div class="user-info">
          <img src="comments_pic_urls" class="avatar">
          <span class="name">韩*桦</span>
        </div>
        <div class="date">{{item.create_time}}</div>
      </div>
      <div class="content">{{item.comments}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  data() {
    return {
      travelCommentsList: [
        {
          travel_type: 0,
          tid: 1,
          torder_id: 1,
          comments: "It's good for me!",
          service_stars: 5,
          way_stars: 4,
          comments_uid: 18,
          create_time: "2019-01-08 20:47:18",
          comments_pic_urls: "",
          id: 1
        },
        {
          travel_type: 0,
          tid: 2,
          torder_id: 1,
          comments: "It's good for you!",
          service_stars: 5,
          way_stars: 4,
          comments_uid: 18,
          create_time: "2019-01-08 20:47:20",
          comments_pic_urls: "",
          id: 1
        }
      ]
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
