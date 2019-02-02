<template>
  <div>
    <div class="title">套餐类型</div>
    <div class="package-container">
      <div
        class="package"
        v-for="(item,index) in travelProductPriceList"
        :key="item.tid"
        :class="packageIndex==index?'pk-select':''"
        @click="selectPackage(index)"
      >
        <p>{{item.p_title}}</p>
      </div>
    </div>
    <div class="title">出发日期</div>
    <div class="date-bar" @click="showPicker()">
      <span>{{time}}</span>
      <img src="@/assets/btn_jiantou_xiao.png">
    </div>
    <div class="title">出游人群</div>
    <div class="people">
      <div class="people-bar">
        <p @click="choosePeople(1)" :class="peopleType==1?'selected':''">成人</p>
        <p @click="choosePeople(2)" :class="peopleType==2?'selected':''">儿童</p>
        <p @click="choosePeople(3)" :class="peopleType==3?'selected':''">单人房差</p>
      </div>
    </div>
    <div class="title">购买数量</div>
    <div class="amount">
      <div>数量</div>
      <div class="digit">
        <div @click="minus()">-</div>
        <div>{{amount}}</div>
        <div @click="add()">+</div>
      </div>
    </div>
    <div class="footer">
      <div class="submit-bar">
        <div class="submit-price">
          <p class="text1">总价</p>
          <p class="c-green text2">￥{{totalPrice}}</p>
        </div>
        <div class="bg-green submit-btn" @click="submit()">立即预定</div>
      </div>
    </div>
    <mt-datetime-picker
      v-show="pickerVisible"
      ref="picker"
      type="date"
      v-model="dateVal"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      @confirm="handleConfirm"
    ></mt-datetime-picker>
  </div>
</template>

<script>
import { getTravelProductAllPrice } from "@/middleware/product";
export default {
  name: "Package",
  data() {
    return {
      pickerVisible: false,
      dateVal: new Date(),
      startDate: new Date(),
      time: new Date().format("YYYY-MM-dd"),
      peopleType: 1,
      amount: 1,
      packageIndex: 0,
      totalPrice: 0,
      travelProductPriceList: [
        {
          is_default: 0,
          tid: 1,
          price_id: 1,
          price: 120,
          description: "标配行程价1",
          p_title: "标配行程价1",
          lang_id: "cn"
        },
        {
          is_default: 0,
          tid: 2,
          price_id: 2,
          price: 123,
          description: "标配行程价2",
          p_title: "标配行程价2",
          lang_id: "cn"
        },
        {
          is_default: 1,
          tid: 3,
          price_id: 2,
          price: 124,
          description: "标配行程价3",
          p_title: "标配行程价3",
          lang_id: "cn"
        }
      ]
    };
  },
  created() {
    for (let i = 0; i < this.travelProductPriceList.length; i++) {
      let travel = this.travelProductPriceList[i];
      if (travel.is_default == 1) {
        this.packageIndex = i;
        this.totalPrice = travel.price;
        break;
      }
    }
  },
  activated() {
    console.log("activeted");
    let query = this.$route.query;
    if (query.time) {
      this.dateVal = new Date(query.time);
      this.amount = query.amount * 1;
      this.totalPrice = this.amount * query.price;
      this.time = query.time;
    }
  },
  methods: {
    _getTravelProductAllPrice() {
      getTravelProductAllPrice().then(res => {
        console.log(res);
      });
    },
    showPicker() {
      this.pickerVisible = true;
      this.$refs.picker.open();
    },
    handleConfirm(newDate) {
      this.time = newDate.format("YYYY-MM-dd");
    },
    choosePeople(tid) {
      this.peopleType = tid;
    },
    minus() {
      if (this.amount == 1) {
        return;
      }
      this.amount -= 1;
      this.getTotalPrice();
    },
    add() {
      this.amount += 1;
      this.getTotalPrice();
    },
    selectPackage(index) {
      this.packageIndex = index;
      this.getTotalPrice();
    },
    getTotalPrice() {
      let price = this.travelProductPriceList[this.packageIndex].price;
      this.totalPrice = price * this.amount;
    },
    submit() {
      this.$router.push({
        path: "/productDetail",
        query: {
          ...this.travelProductPriceList[this.packageIndex],
          amount: this.amount,
          time: this.time
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.package-container {
  padding: 0px 16px;
}
.package {
  background: #ffffff;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 9px 12px;
  border-radius: 2px;
  margin-bottom: 8px;
}
.package p {
  color: #808080;
}
.pk-select {
  background: rgba(0, 199, 89, 0.2);
  border: 1px solid #00c759;
}
.pk-select p {
  color: #383838;
}
.title {
  font-size: 14px;
  color: #a6a6a6;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 8px;
}
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
.amount {
  height: 60px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
}
.amount div:nth-child(1) {
  font-size: 17px;
  color: #383838;
  font-weight: 550;
}
.digit {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.digit div:nth-child(1) {
  width: 24px;
  height: 24px;
  background: #f7f7f7;
  color: #cccccc;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-right: 17px;
}
.digit div:nth-child(2) {
  font-size: 17px;
  color: #383838;
  font-weight: 550;
}
.digit div:nth-child(3) {
  width: 24px;
  height: 24px;
  background: #f7f7f7;
  color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 17px;
}
.submit-bar {
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #ffffff;
}
.submit-price {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4px 16px;
}
.text1 {
  color: #383838;
  font-size: 12px;
  padding-left: 6px;
}
.text2 {
  font-size: 20px;
}
.text3 {
  color: #383838;
  font-size: 14px;
  margin-top: 16px;
  margin-left: 15px;
  margin-bottom: 8px;
}
.submit-btn {
  color: #ffffff;
  font-size: 18px;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
