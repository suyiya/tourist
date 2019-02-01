<template>
  <div class="container">
    <info-big v-for="item in travelProductList" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import InfoBig from "@/base/info-big";
export default {
  name: "ProductList",
  data() {
    return {
      travelProductList: [
        {
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
        },
        {
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
          title: "second travel",
          subtitle: "second travel in shanghai 3 days",
          default_price: 1220,
          default_price_introduce: "标配行程价",
          default_price_title: "标配行程价",
          id: 2
        },
        {
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
          title: "third travel",
          subtitle: "third travel in shanghai 3 days",
          default_price: 3120,
          default_price_introduce: "标配行程价",
          default_price_title: "标配行程价",
          id: 3
        }
      ]
    };
  },
  components: {
    InfoBig
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 12px 16px;
}
</style>
