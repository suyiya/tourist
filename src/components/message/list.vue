<template>
  <div class="message-list">
    <message-item v-for="item in message_list" :key="item.Id" :data="item"/>
  </div>
</template>

<script>
import MessageItem from "@/base/message-item";
export default {
  name: "MessageList",
  data() {
    return {
      message_list: [
        {
          Id: 1,
          m_type: 1,
          message: "hahaha",
          orderId: 1,
          productId: 1,
          notifyUId: 1,
          notify_time: "2018-11-11 15:15:15",
          relate_with: 1
        }
      ]
    };
  },
  created() {
    console.log(this.$route);
  },
  components: {
    MessageItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-list {
  padding: 12px 16px;
}
</style>
