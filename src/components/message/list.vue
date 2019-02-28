<template>
  <div>
    <div class="page-loadmore-wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore
        :top-method="loadTop"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :auto-fill="false"
        ref="loadmore"
      >
        <div class="message-list">
          <message-item v-for="item in message_list" :key="item.Id" :data="item"/>
        </div>
      </mt-loadmore>
    </div>
    <tab :tabIndex="2"></tab>
  </div>
</template>

<script>
import MessageItem from "@/base/message-item";
import Tab from "@/components/tab/tab";
import { getMessage } from "@/middleware/message";
import { Toast, Loadmore } from "mint-ui";
export default {
  name: "MessageList",
  data() {
    return {
      message_list: [],
      wrapperHeight: 0,
      allLoaded: false
    };
  },
  created() {
    this._getMessage();
  },
  mounted() {
    let windowWidth = document.documentElement.clientWidth; //获取屏幕宽度
    if (windowWidth >= 768) {
      //这里根据自己的实际情况设置容器的高度
      this.wrapperHeight = document.documentElement.clientHeight - 105;
    } else {
      this.wrapperHeight = document.documentElement.clientHeight - 50;
    }
  },
  methods: {
    _getMessage(direction) {
      // if (!this.allLoaded) {
      //   return;
      // }
      this.allLoaded = false;
      let params = {
        type: 2
      };
      getMessage(params)
        .then(res => {
          console.log(res);
          // this.allLoaded = true;
          if (direction == "1") {
            this.$refs.loadmore.onBottomLoaded();
          } else if (direction == "0") {
            this.$refs.loadmore.onTopLoaded();
          }
          let message_list = res.data.message_list || [];
          this.message_list = message_list;
        })
        .catch(res => {
          this.allLoaded = true;
          Toast(res.msg);
        });
    },
    loadTop() {
      console.log("loadTop");
      this._getMessage(0);
    },
    loadBottom() {
      console.log("loadBottom");
      this._getMessage(1);
    }
  },
  components: {
    MessageItem,
    Tab,
    Loadmore
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-loadmore-wrapper {
  overflow: scroll;
}
.message-list {
  padding: 0px 16px;
}
</style>
