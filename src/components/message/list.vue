<template>
  <div class="message-list">
    <message-item/>
    <message-item/>
    <message-item/>
    <message-item/>
    <message-item/>
    <message-item/>
    <message-item/>
    <message-item/>
  </div>
</template>

<script>
import MessageItem from "@/base/message-item";
export default {
  name: "MessageList",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
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
