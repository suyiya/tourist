<template>
  <div>
    <div class="message-list">
      <message-item v-for="item in message_list" :key="item.Id" :data="item"/>
    </div>
    <tab :tabIndex="2"></tab>
  </div>
</template>

<script>
import MessageItem from "@/base/message-item";
import Tab from "@/components/tab/tab";
import { getMessage } from "@/middleware/message";
import { Toast } from "mint-ui";
export default {
  name: "MessageList",
  data() {
    return {
      message_list: []
    };
  },
  created() {
    this._getMessage();
  },
  methods: {
    _getMessage() {
      let params = {
        type: 2
      };
      getMessage(params)
        .then(res => {
          console.log(res);
          let message_list = res.data.message_list || [];
          this.message_list = message_list;
        })
        .catch(res => {
          Toast(res.msg);
        });
    }
  },
  components: {
    MessageItem,
    Tab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-list {
  padding: 12px 16px;
}
</style>
