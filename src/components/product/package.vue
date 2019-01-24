<template>
  <div class="hello">
    <div>套餐类型</div>
    <div>出发日期</div>
    <div class="date-bar" @click="showPicker()">
      <span>{{time}}</span>
      <img src="@/assets/btn_jiantou_xiao.png">
    </div>
    <div>出游人群</div>
    <div class="people">
      <div class="people-bar">
        <p @click="choosePeople(1)" :class="peopleType==1?'selected':''">成人</p>
        <p @click="choosePeople(2)" :class="peopleType==2?'selected':''">儿童</p>
        <p @click="choosePeople(3)" :class="peopleType==3?'selected':''">单人房差</p>
      </div>
    </div>
    <div>购买数量</div>
    <mt-datetime-picker
      v-show="pickerVisible"
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      @confirm="handleConfirm"
    ></mt-datetime-picker>
  </div>
</template>

<script>
export default {
  name: "Package",
  data() {
    return {
      pickerVisible: false,
      startDate: new Date(),
      time: new Date().format("YYYY-MM-dd"),
      peopleType: 1
    };
  },

  methods: {
    showPicker() {
      this.pickerVisible = true;
      this.$refs.picker.open();
    },
    handleConfirm(newDate) {
      this.time = newDate.format("YYYY-MM-dd");
    },
    choosePeople(index) {
      this.peopleType = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date-bar {
  height: 44px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
}
.date-bar span {
  font-size: 16px;
  font-weight: 700;
}
.date-bar img {
  height: 16px;
  width: 16px;
}
.people {
  background: white;
  padding: 10px 16px;
}
.people-bar {
  height: 40px;
  border-radius: 5px;
  border: 1px solid #e1e6e8;
  display: flex;
  align-items: center;
}
.people-bar p {
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: #808080;
  height: 100%;
  align-items: center;
}
.people-bar p:nth-child(2) {
  border-left: 1px solid #e1e6e8;
}
.people-bar p:nth-child(3) {
  border-left: 1px solid #e1e6e8;
}
.selected {
  background: #00c759;
  color: #fff !important;
}
.mint-datetime-action {
  text-align: left;
}
</style>
