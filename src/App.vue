<template>
  <div id="app">
    <router-view></router-view>
     <Tabbar>
       <TabbarItem path="/home" active="deeppink">
          <img slot="item-icon" src="~assets/image/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/image/tabbar/home_active.svg" alt="">
          <div slot="item-text">首页</div>
        </TabbarItem>
         <TabbarItem path="/category">
          <img slot="item-icon" src="~assets/image/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="~assets/image/tabbar/category_active.svg" alt="">
          <div slot="item-text">商品</div>
        </TabbarItem>
         <TabbarItem path="/shopcart">
          <img slot="item-icon" src="~assets/image/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="~assets/image/tabbar/shopcart_active.svg" alt="">
          <div slot="item-text">购物车</div>
        </TabbarItem>
         <TabbarItem path="/profile">
          <img slot="item-icon" src="~assets/image/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="~assets/image/tabbar/profile_active.svg" alt="">
          <div slot="item-text">个人中心</div>
        </TabbarItem>
     </Tabbar>
  </div>
</template>
<script>
import Tabbar from "components/tabbar/Tabbar.vue";
import TabbarItem from "components/tabbar/TabbarItem.vue";
export default {
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>
<style>
   @import "assets/css/base.css";
</style>
